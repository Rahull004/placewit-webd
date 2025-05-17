// Task 1 : Write a program to download data from a URL, write it to a file, and upload the file to a server using callbacks.

function downloadData(url, callback) {
    console.log("Downloading data from the URL...");

    setTimeout(() => {
        const data = "Sample data from " + url;
        console.log("Data downloaded successfully.");
        callback(data);
    },5000);
    
}

function writeToFile(data, callback) {
    console.log("Writing data to file...");

    setTimeout(() => {
        console.log("Data written to file successfully.");

        const fileName = "output.txt";
        const fdata = "Data written to " + fileName + ": " + data;

        callback(fdata);
    }, 5000);
}

function uploadFile(fileName,destinationURL, callback) {
    console.log("Uploading file.. to " + destinationURL);

    setTimeout(() => {
        console.log("File uploaded successfully.");
        const response = "File " + fileName + " uploaded to " + destinationURL; 
        callback(response);
       
    }, 5000);
}

function processFlow() {
    const url = "https://xyz.com/data";
    const destinationURL = "https://xyz.com/upload";

    downloadData(url, (data) => {
        writeToFile(data, (fileData) => {
            console.log(fileData);
            uploadFile("output.txt", destinationURL, (response) => {
                console.log(response);
            });
        });
    });
}

// processFlow();

// Task 2 : Write a program to download data from a URL, write it to a file, and upload the file to a server using promises.
function downloadDataPromise(url) {
    return new Promise((resolve, reject) => {
        console.log("Downloading data from the URL...");

        setTimeout(() => {
            if (Math.random() < 0.8) { 
                const data = "Sample data from " + url;
                console.log("Data downloaded successfully.");
                resolve(data);
            } else {
                reject("Failed to download data from " + url);
            }
        }, 5000);
    });
}

function writeToFilePromise(data) {
    return new Promise((resolve, reject) => {
        console.log("Writing data to file...");

        setTimeout(() => {
            if (Math.random() < 0.8) {
                console.log("Data written to file successfully.");
                const fileName = "output.txt";
                const fdata = "Data written to " + fileName + ": " + data;
                resolve(fdata);
            } else {
                reject("Failed to write data to file.");
            }
        }, 5000);
    });
}

function uploadFilePromise(fileName, destinationURL) {
    return new Promise((resolve, reject) => {
        console.log("Uploading file to " + destinationURL + "...");

        setTimeout(() => {
            if (Math.random() < 0.8) {
                console.log("File uploaded successfully.");
                const response = "File " + fileName + " uploaded to " + destinationURL;
                resolve(response);
            } else {
                reject("Failed to upload file to " + destinationURL);
            }
        }, 5000);
    });
}

function processFlowPromise() {
    const url = "https://xyz.com/data";
    const destinationURL = "https://xyz.com/upload";

    downloadDataPromise(url)
        .then((data) => writeToFilePromise(data))
        .then((fileData) => {
            console.log(fileData);
            return uploadFilePromise("output.txt", destinationURL);
        })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
}

// processFlowPromise();

// Task 3 : Write a program to download data from a URL, write it to a file, and upload the file to a server using async/await.

async function downloadDataAsync(url) {
    return new Promise((resolve, reject) => {
        console.log("Downloading data from the URL...");

        setTimeout(() => {
            if (Math.random() < 0.8) {
                const data = "Sample data from " + url;
                console.log("Data downloaded successfully.");
                resolve(data);
            } else {
                reject("Failed to download data from " + url);
            }
        }, 5000);
    });
}

async function writeToFileAsync(data) {
    return new Promise((resolve, reject) => {
        console.log("Writing data to file...");

        setTimeout(() => {
            if (Math.random() < 0.8) {
                console.log("Data written to file successfully.");

                const fileName = "output.txt";
                const fdata = "Data written to " + fileName + ": " + data;

                resolve(fdata);
            } else {
                reject("Failed to write data to file.");
            }
        }, 5000);
    });
}

async function uploadFileAsync(fileName, destinationURL) {
    return new Promise((resolve, reject) => {
        console.log("Uploading file to " + destinationURL + "...");

        setTimeout(() => {
            if (Math.random() < 0.8) {
                console.log("File uploaded successfully.");
                const response = "File " + fileName + " uploaded to " + destinationURL;
                resolve(response);
            } else {
                reject("Failed to upload file to " + destinationURL);
            }
        }, 5000);
    });
}

async function processFlowAsync() {
    const url = "https://xyz.com/data";
    const destinationURL = "https://xyz.com/upload";

    try {
        const data = await downloadDataAsync(url);
        const fileData = await writeToFileAsync(data);
        console.log(fileData);
        const response = await uploadFileAsync("output.txt", destinationURL);
        console.log(response);
    } catch (error) {
        console.error("Error:", error);
    }
}

processFlowAsync();

