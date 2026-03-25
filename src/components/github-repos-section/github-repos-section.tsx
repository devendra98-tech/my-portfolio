import { FC, useEffect, useRef, useState } from "react";
import { useGsapReveal } from "../../hooks/useGsapReveal";
import { SECTION_IDS, SITE } from "../../config/site";

type GitHubRepo = {
  id: number;
  name: string;
  html_url: string;
  stargazers_count: number;
  description: string | null;
  fork: boolean;
};

const USER = process.env.REACT_APP_GITHUB_USERNAME || SITE.githubApiUser;

type GitHubReposSectionProps = {
  isLoading: boolean;
};

const GitHubReposSection: FC<GitHubReposSectionProps> = ({ isLoading }) => {
  const containerRef = useRef<HTMLElement | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [fetchError, setFetchError] = useState(false);
  const [fetching, setFetching] = useState(true);
  useGsapReveal(containerRef, { y: 28 }, !isLoading);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch(
          `https://api.github.com/users/${encodeURIComponent(
            USER
          )}/repos?sort=updated&per_page=8&type=owner`
        );
        if (!res.ok) throw new Error("GitHub API error");
        const data: GitHubRepo[] = await res.json();
        const visible = data.filter((r) => !r.fork).slice(0, 6);
        if (!cancelled) {
          setRepos(visible);
          setFetchError(false);
        }
      } catch {
        if (!cancelled) {
          setFetchError(true);
          setRepos([]);
        }
      } finally {
        if (!cancelled) setFetching(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const showSkeleton = isLoading || fetching;

  return (
    <section
      className="github-repos-section"
      id={SECTION_IDS.repos}
      ref={containerRef}
    >
      <div className="max-width">
        <h2 className="title" data-animate="fade">
          GitHub Projects
        </h2>
        <p className="github-repos-section__subtitle" data-animate="fade">
          Recent public repositories ·{" "}
          <a
            href={SITE.githubProfile}
            target="_blank"
            rel="noopener noreferrer"
            className="github-repos-section__profile-link"
          >
            @{USER}
          </a>
        </p>
        <ul className="github-repos-section__list">
          {showSkeleton
            ? Array.from({ length: 4 }, (_, i) => (
                <li key={i} className="github-repo-card github-repo-card--skeleton">
                  <div className="skeleton skeleton-text skeleton-heading" />
                  <div className="skeleton skeleton-text short" />
                  <div className="skeleton skeleton-pill" />
                </li>
              ))
            : fetchError
              ? (
                <li className="github-repo-card github-repo-card--error" data-animate="fade">
                  <p>
                    Repositories could not be loaded (rate limit or network).
                    View them directly on{" "}
                    <a
                      href={SITE.githubProfile}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                    .
                  </p>
                </li>
              )
              : repos.map((repo) => (
                  <li key={repo.id} data-animate="fade">
                    <a
                      className="github-repo-card"
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="github-repo-card__head">
                        <span className="github-repo-card__name">{repo.name}</span>
                        <span className="github-repo-card__stars">
                          <i className="fas fa-star" aria-hidden="true" />{" "}
                          {repo.stargazers_count}
                        </span>
                      </div>
                      {repo.description && (
                        <p className="github-repo-card__desc">{repo.description}</p>
                      )}
                    </a>
                  </li>
                ))}
        </ul>
      </div>
    </section>
  );
};

export default GitHubReposSection;
