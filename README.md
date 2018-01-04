# rest-project-skeleton

### What is it?
This is a Gradle project pre-configured so that you can start coding right away (and not have to fight through all of the config).

### How do you use it?
* If you have not done so already, clone this repository to your `Desktop` (if you have already, be sure to pull).

* Copy this directory to another location on your computer. As an example, if I have this repository cloned to my Desktop and I wanted to copy the project files to my `~/SD` directory and name it 'myNewProject' I would:

```bash
scp -rp ~/Desktop/SD13/unit3/resources/rest-project-skeleton myNewProject
```

* Once you've copied the files, open the folder as a new Workspace in STS:
  * In STS go to _file > Switch Workspace > {Select This Directory}_

* Now that you are in the new workspace, you need to import the projects, you can do this in one step by going to _File > Import > Existing Gradle Project_
  * Navigate to the project directory, and highlight the `MVCProject`. Importing the MVCProject will also import the JPAProject.

* Now you should have both projects, run a Gradle refresh on the `MVCProject`.

* Set up a server and you are good to go.

* FINALLY!!!! In _JPAProject > META-INF > persistence.xml_ change the database url to the name of your database for your new project (and the username and password if you created a specific user).
