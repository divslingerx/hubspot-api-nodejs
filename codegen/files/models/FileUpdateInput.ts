/**
 * Files
 * Upload and manage files.
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
* Object for updating files.
*/
export class FileUpdateInput {
    /**
    * New name for the file.
    */
    'name'?: string;
    /**
    * Folder ID where the file should be moved to.  folderId and folderPath cannot be set at the same time.
    */
    'parentFolderId'?: string;
    /**
    * Folder path where the file should be moved to. folderId and folderPath cannot be set at the same time.
    */
    'parentFolderPath'?: string;
    /**
    * Mark weather the file should be used in new content or not.
    */
    'isUsableInContent'?: boolean;
    /**
    * NONE: Do not run any duplicate validation. REJECT: Reject the upload if a duplicate is found. RETURN_EXISTING: If a duplicate file is found, do not upload a new file and return the found duplicate instead. 
    */
    'access'?: FileUpdateInputAccessEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "parentFolderId",
            "baseName": "parentFolderId",
            "type": "string",
            "format": ""
        },
        {
            "name": "parentFolderPath",
            "baseName": "parentFolderPath",
            "type": "string",
            "format": ""
        },
        {
            "name": "isUsableInContent",
            "baseName": "isUsableInContent",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "access",
            "baseName": "access",
            "type": "FileUpdateInputAccessEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return FileUpdateInput.attributeTypeMap;
    }

    public constructor() {
    }
}


export type FileUpdateInputAccessEnum = "PUBLIC_INDEXABLE" | "PUBLIC_NOT_INDEXABLE" | "HIDDEN_INDEXABLE" | "HIDDEN_NOT_INDEXABLE" | "HIDDEN_PRIVATE" | "PRIVATE" ;
