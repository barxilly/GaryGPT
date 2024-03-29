async function run() {
  const MSICreator = require('electron-wix-msi').MSICreator;

  // Step 1: Instantiate the MSICreator
  const msiCreator = new MSICreator({
    appDirectory: 'C:\\Users\\Ben\\Code\\chatbot\\GaryGPT - Claude\\release-builds\\@garygpt-claude-win32-x64',
    description: 'A desktop app for @garygpt-claude',
    exe: '@garygpt-claude.exe',
    name: '@garygpt-claude',
    manufacturer: 'Ben Smith',
    // Get package version from the package.json
    version: process.env.npm_package_version,
    outputDirectory: 'C:\\Users\\Ben\\Code\\chatbot\\GaryGPT - Claude\\release-builds\\msi-builds'
  });

  // Step 2: Create a .wxs template file
  const supportBinaries = await msiCreator.create();


  // Step 3: Compile the template to a .msi file
  await msiCreator.compile();
}

run();