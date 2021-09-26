NOTE: Open with .txt for best view

GIT_________________________________________________________________________________________________

DESCRIPTION								        GIT COMMAND					ADDITIONAL INFO
CONVERT FOLDER INTO REPO				  git init					never do this on any pc main folder
IGNORE EVERYTHING INSIDE FILE			NA							everything inside a ".gitignore" will be ignored. add comments with #
IGNORE ENTIRE FILDER in ".ignore"	NA							add "folder_name/*" to do this
REMOVE UNTRACKED FILES					  git rm -r --cached			clearing cache basically
CHECK STAGING AREA						    git status		
ADD ONE FILE TO STAGING AREA			git add file_path			in git status, it will show in red now
ADD MULTIPLE FILES TO STAGING			git add .
REMOVE FILE								        git rm file_name		
REMOVE FILE FROM STAGING AREA			git rm --cached file_name	this does not delete the file
LOG INTO ALL TERMINALS (ANY REPO)	git config --global
COMMIT								          	git commit -m "your message"	"-m"=message
LOG COMMITS							        	git log   (--oneline)		add "--oneline" if there are too many commits
CREATE A NEW BRANCH				    		git branch branch_name
LIST ALL BRANCHES					       	git branch -a
DELETE BRANCH						        	git branch -d branch_id		"-d"=delete
MOVE(HEAD) TO A DIFFERENT BRANCH/MASTER	git checkout branch/master
MOVE BACK IN TIME TO EARLY COMMIT		git revert commit_id		you can also revert a revert
MOVE BACK PERMANENTLY					      git reset --hard commit_id	its better to make sure with git checkout first
GO BACK ONE COMMIT					      	git reset --soft commit_id	usually done to fix spelling mistake in commit_name

**Most common flags: -a, -m, -d

