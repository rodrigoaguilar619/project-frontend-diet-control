export function downloadFileFromBase64(base64: string, nameFile: string, extension: string) {

    let a = document.createElement("a"); //Create <a>
    let octetFile = "data:application/octet-stream;base64," + base64;
    a.href = octetFile; //Image Base64 Goes here
    a.download = nameFile + "." + extension; //File name Here
    a.click(); //Downloaded file
}