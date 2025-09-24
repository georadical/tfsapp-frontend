# TimesheetApi.LegalSectionApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**legalSectionPartialUpdate**](LegalSectionApi.md#legalSectionPartialUpdate) | **PATCH** /api/legal-section/ | 
[**legalSectionRetrieve**](LegalSectionApi.md#legalSectionRetrieve) | **GET** /api/legal-section/ | 
[**legalSectionUpdate**](LegalSectionApi.md#legalSectionUpdate) | **PUT** /api/legal-section/ | 



## legalSectionPartialUpdate

> LegalSection legalSectionPartialUpdate(opts)



API endpoint for managing legal information in the footer. Supports GET, PUT, and PATCH operations to retrieve or update the legal information. Only one instance of this model exists.

### Example

```javascript
import TimesheetApi from 'timesheet_api';
let defaultClient = TimesheetApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';
// Configure API key authorization: cookieAuth
let cookieAuth = defaultClient.authentications['cookieAuth'];
cookieAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//cookieAuth.apiKeyPrefix = 'Token';

let apiInstance = new TimesheetApi.LegalSectionApi();
let opts = {
  'patchedLegalSectionRequest': new TimesheetApi.PatchedLegalSectionRequest() // PatchedLegalSectionRequest | 
};
apiInstance.legalSectionPartialUpdate(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patchedLegalSectionRequest** | [**PatchedLegalSectionRequest**](PatchedLegalSectionRequest.md)|  | [optional] 

### Return type

[**LegalSection**](LegalSection.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## legalSectionRetrieve

> LegalSection legalSectionRetrieve()



API endpoint for managing legal information in the footer. Supports GET, PUT, and PATCH operations to retrieve or update the legal information. Only one instance of this model exists.

### Example

```javascript
import TimesheetApi from 'timesheet_api';
let defaultClient = TimesheetApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';
// Configure API key authorization: cookieAuth
let cookieAuth = defaultClient.authentications['cookieAuth'];
cookieAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//cookieAuth.apiKeyPrefix = 'Token';

let apiInstance = new TimesheetApi.LegalSectionApi();
apiInstance.legalSectionRetrieve().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**LegalSection**](LegalSection.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## legalSectionUpdate

> LegalSection legalSectionUpdate(legalSectionRequest)



API endpoint for managing legal information in the footer. Supports GET, PUT, and PATCH operations to retrieve or update the legal information. Only one instance of this model exists.

### Example

```javascript
import TimesheetApi from 'timesheet_api';
let defaultClient = TimesheetApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';
// Configure API key authorization: cookieAuth
let cookieAuth = defaultClient.authentications['cookieAuth'];
cookieAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//cookieAuth.apiKeyPrefix = 'Token';

let apiInstance = new TimesheetApi.LegalSectionApi();
let legalSectionRequest = new TimesheetApi.LegalSectionRequest(); // LegalSectionRequest | 
apiInstance.legalSectionUpdate(legalSectionRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **legalSectionRequest** | [**LegalSectionRequest**](LegalSectionRequest.md)|  | 

### Return type

[**LegalSection**](LegalSection.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json

