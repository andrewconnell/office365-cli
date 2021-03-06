# spo contenttype field set

Adds or updates a site column reference in a site content type

## Usage

```sh
spo contenttype field set [options]
```

## Options

Option|Description
------|-----------
`--help`|output usage information
`-u, --webUrl <webUrl>`|Absolute URL of the site where the content type is located
`-c, --contentTypeId <contentTypeId>`|ID of the content type on which the field reference should be set
`-f, --fieldId <fieldId>`|ID of the field to which the reference should be set
`-r, --required [required]`|Set to `true`, if the field should be required or to `false` if it should be optional
`-h, --hidden [hidden]`|Set to `true`, if the field should be hidden or to `false` if it should be visible
`-o, --output [output]`|Output type. `json|text`. Default `text`
`--verbose`|Runs command with verbose logging
`--debug`|Runs command with debug logging

!!! important
    Before using this command, connect to a SharePoint Online tenant admin site, using the [spo connect](../connect.md) command.

## Remarks

To add a field reference to a content type, you have to first connect to a SharePoint site using the [spo connect](../connect.md) command, eg. `spo connect https://contoso.sharepoint.com`.

If the field reference already exists, the command will update its _required_ and _hidden_ properties as specified in the command.

## Examples

Add the specified site column to the specified content type as an optional and visible field

```sh
spo contenttype field set --webUrl https://contoso.sharepoint.com/sites/portal --contentTypeId 0x01007926A45D687BA842B947286090B8F67D --fieldId ebe7e498-44ff-43da-a7e5-99b444f656a5
```

Add the specified site column to the specified content type as a required field

```sh
spo contenttype field set --webUrl https://contoso.sharepoint.com/sites/portal --contentTypeId 0x01007926A45D687BA842B947286090B8F67D --fieldId ebe7e498-44ff-43da-a7e5-99b444f656a5 --required true
```

Update the existing site column reference in the specified content type to optional

```sh
spo contenttype field set --webUrl https://contoso.sharepoint.com/sites/portal --contentTypeId 0x01007926A45D687BA842B947286090B8F67D --fieldId ebe7e498-44ff-43da-a7e5-99b444f656a5 --required false
```