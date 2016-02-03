Setting up OpenShift:

# Install NodeJS -- NodeJS website

1. Install Git ignore If already Installed
		https://git-scm.com/downloads
2. Install Ruby Installer
		http://rubyinstaller.org/downloads/

3. Please Fallow below Steps to Setup local environment for OpenShift		
		https://developers.openshift.com/en/getting-started-windows.html#client-tools						
		
		
				
# Deploying the Project to OpenShift

Commands: 

1. $ git add .
2. $ git commit -m "A checkin to my application"
3. $ git push

# Push Project to Another Github Account:

1. Open id_rsa.pub file in user directory
2. Copy the key from the file
3. Login in to Github in browser -->  Repository --> Settings --> Deploy Keys --> Add Key and past the copied key.
	(By this we are giving acces to our Repository to accept the push from this local mechine)
4. Open Project Directory and .git folder 
5. Open Config file in text editor and in place add the url of the Repository in Remote Origin Section 
	Sample Origin will be as below
	[remote "origin"]
	
    URL for Open Shift Application Repo :
	url = ssh://56af96b789f5cf7fa4000043@techblaze-techblaze.rhcloud.com/~/git/techblaze.git/
	
    URL for Custom Account Repo :	
    url = git@github.com:techblaze/TechBlazeDev1.git
    
	fetch = +refs/heads/*:refs/remotes/origin/*
	
6. While pushing the changes to Personal Account Repo uncomment the git@github url and comment out the ssh url in github config file