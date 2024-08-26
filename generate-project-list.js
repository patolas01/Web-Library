const fs = require('fs');
const path = require('path');

// Directory to scan for projects (can be modified to search recursively if needed)
const baseDir = './PARTIALS';

// Output JSON file
const outputFile = './projects.json';

// Function to recursively scan directories for index.html files
function scanForProjects(dir, projects = []) {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            // Recursively scan subdirectories
            scanForProjects(fullPath, projects);
        } else if (file === 'index.html') {
            // If an index.html is found, add it to the projects list
            projects.push({
                name: path.basename(path.dirname(fullPath)),  // Use directory name as project name
                path: fullPath.replace(baseDir, '')           // Relative path to index.html
            });
        }
    });

    return projects;
}

// Generate project list and write to the output file
const projects = scanForProjects(baseDir);
fs.writeFileSync(outputFile, JSON.stringify(projects, null, 2));

console.log(`Project list generated with ${projects.length} projects.`);
