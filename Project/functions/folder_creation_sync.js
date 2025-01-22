const fs = require('fs');
const folder_path = './sample';
// const file_name = 'sample4.json';


const schedule = require('node-schedule');

function scheduleFileDeletion(filePath, deleteTime) {
  schedule.scheduleJob(deleteTime, () => {
    if (fs.existsSync(filePath)) {
      fs.rmSync(filePath, { recursive: true, force: true });
      console.log(`File deleted: ${filePath}`);
    } else {
      console.log(`File not found for deletion: ${filePath}`);
    }
  });

  console.log(`File deletion scheduled for: ${deleteTime}`);
}

function create_folder_inside_file(data, file_name) {
  try {

    setTimeout(() => {
      console.log('This will run only after the sync operations are done.');
    }, 0);

    console.log('Start time: ', new Date());

    if (!fs.existsSync(folder_path)) {
      fs.mkdirSync(folder_path);
      console.log('Folder created successfully');
    } else {
      console.log('The folder already exists');
    }

    const path = `${folder_path}/${file_name}`;
    fs.writeFileSync(path, data);
    console.log('File created/updated successfully');

    //schedule to delete
    const now = new Date();
    const deleteTime = new Date(now.getTime() + 1 * 60 * 1000); // Add 2 minutes
    scheduleFileDeletion(path, deleteTime);

    console.log('End time: ', new Date());

    return 'Operation completed successfully';
  } catch (error) {
    console.error('Error during the operation:', error);
    return 'Error occurred';
  }
}

module.exports.create_folder_inside_file = create_folder_inside_file;







