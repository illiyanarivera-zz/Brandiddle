# Brandiddle

## Overview of the Project

- Client: Wayne Pelletier → Resonant Pixel Co.

- Why?:
  - Businesses need good recognizable brands, but designers cost money 💰💰💰
- What to do?
  - Wants to create a web application for his clients to use that will help them brand themselves in an affordable way.

### Software Engineering Background

- Project collaboration by Julia Hart & Illiyana Rivera

#### General Scope

- Possible users:

  - businesses
  - brand managers
  - designers, etc.

- System consists of a web interface and a database which will store user logins and their respective template creations
  - User creates a profile and pays a monthly fee [TBD] to create as many as templates as they like.
  - User selects 2 fonts, colors, icons and other assets.
    - Once selected the user will be able to choose from 3 different templates [ dark, light, minimal ]
  - User can upload their logo.
  - User can download a chosen template to their device

#### Out of Scope

- User cannot create a logo
- 3rd party payment processor
- Copyright/ Patent Registering

## Implimented Features:

- contains a secure log in and sign out
- connected to a database
- upload image
- create a template page

## NonImplimented Features:

- stripe
- edit profile
- save template into database
- make template downloadable

## Dependencies:

- Amplify [AWS]:
  - you will need to make an aws account, go to https://aws.amazon.com/ and sign into the console, and follow the instructions for create a new aws account
  - once you have created an account, navigate to aws amplify
  - open your terminal
  - Go to this site & watch the video for set up instructions: https://docs.amplify.aws/cli/start/install#option-1-watch-the-video-guide
  - When I say run I mean type the following words into the terminal
  - Now run:  amplify init
  - The following are answers to the questions it will ask
    -  Y
    - it may prompt you for a name here, you can choose whatever you'd like
    -  dev
    -  Choose which terminal you are using (for example I choose Visual Studio Code
    -  javascript
    -  react
    -  src
    -  public (this won’t be the default)
    -  npm run build (this won’t be the default)
    -  npm run start (this won’t be the default)
    -   Y 
    -   Whatever name you want
  - If you are confused with the above instructions check out this video: https://www.youtube.com/watch?v=3a86SFIRvVA
  - Now run: amplify publish (when prompted put Y)
  - Now run: amplify add hosting
  - The following are answers to the questions it will ask
     - Hosting with Amplify Console (Managed hosting with custom domains, Continuous deployment) 
     - Manual deployment
     
  - Now run: amplify publish (when prompted put Y)
  - Now run: amplify add auth
  - The following are answers to the questions it will ask
     - Default configuration
     - Username
     - No I am done
   - If you are confused with the above instructions check out this video: https://www.youtube.com/watch?v=3a86SFIRvVA
   - run: amplify publish (put Y when prompted)
   - run: npm install aws-amplify @aws-amplify/ui-react
   - run: amplify push
   - We know this is a lot, so if you come across any issues, feel free to email us!

- Node.js:
  -   Download Node.js Installer
    -    In a web browser, navigate to https://nodejs.org/en/download/.
  -   Once the installer finishes downloading, launch it.
  -   The system will ask if you want to run the software – click Run.
  -   You will be welcomed to the Node.js - click Next
  -   On the next screen, review the license agreement. Click Next if you agree to the terms and install the software.
  -   The installer will prompt you for the installation location. Leave the default location, unless you have a specific need to install it somewhere else – then click Next.
  -   Finally, click the Install button to run the installer. When it finishes, click Finish.
  -   Verify the installation with your terminal
    -      $node –v

- Gatsby: from https://www.gatsbyjs.com/docs/tutorial/part-zero/
  -   Now that Node.js is installed, you must use it to install gatsby to run the website.
  -  $npm install -g gatsby-cli
    -   NOTE: $gatsby --help
      -   can be used to understand other gatsby commands. 
      
## Instructions for Compilation:
- NOTE: Gatsby must be installed
- to compile code enter into the terminal
  $ cd Brandiddle
  $ gatsby develop

## Instructions for Running:

- enter https://localhost:8000 into your web browser of choice
