# To create a repository in the actual directory
git init
# To see what files status are
git status
# To add files to the stagging area
git add [The name of the file]
# To add all the files with updates
git add .
# To send to the commit all the files in the stagging area
git commit -m " The comment about the change"
# To change a branch
git checkout [the id of the commit]
# To see the what are the commits of the repository
git log
# To see the GUI of the log 
gitk.exe
#To Create a new branch and move the the branch 
git checkout -b dev 
# To move a master 
git checkout master
# To create a new branch
git branch bugs
# To see all branches
git branch -a
# To add a remote Origin 
git remote add origin https://github.com/grojas123/mynewrepo.git
# To pull the main of the repository was set in the command git remote add origin
git pull origin master 
# Push the master to remote remote repository 
git push -u origin feature/course-1
# Shows URLs of remote repositories when listing your current remote connections.
git remote -v 