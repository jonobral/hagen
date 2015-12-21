# HAGEN

This app will be used to keep a record of prices by category.

## Development Flow

### Download repo to developer environment
* Fork the repository
* Clone your repository (choose your workspace)
  <pre><code>git clone git@github.com:username/hagen.git</code></pre>
* Add upstream remote (get into hagen folder just cloned)
  <pre><code>git remote add upstream git@github.com:jonobral/hagen.git</code></pre>
* Check remotes for origin & upstream
  <pre><code>git remote -v</code></pre>
* Results:
  <pre><code>upstream	git@github.com:jonobral/hagen.git (fetch)</code></pre>
  <pre><code>upstream	git@github.com:jonobral/hagen.git (push)</code></pre>

### Sync local development repo with upstream
* Fetching latest commits
  <pre><code>git fetch upstream</code></pre>
* Merging commits into local files
  <pre><code>git merge upstream/master</code></pre>

### Commit features/fixes to upstream
* Add changes to local Stage (see https://www.atlassian.com/git/tutorials/saving-changes/git-add)
  <pre><code>git add {file}</code></pre>
* Commit changes ready to be pushed to cloned repo
  <pre><code>git commit -m "<message>"</code></pre>
* Push local commits to master repo
  <pre><code>git push origin master</code></pre>
* Open PR to upstream master by opening Pull Requests page:
  https://github.com/username/hagen/pulls
* Add a detailed comment
