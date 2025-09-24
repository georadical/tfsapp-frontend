# TimesheetApi.LocationSectionApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**locationSectionPartialUpdate**](LocationSectionApi.md#locationSectionPartialUpdate) | **PATCH** /api/location-section/ | 
[**locationSectionRetrieve**](LocationSectionApi.md#locationSectionRetrieve) | **GET** /api/location-section/ | 
[**locationSectionUpdate**](LocationSectionApi.md#locationSectionUpdate) | **PUT** /api/location-section/ | 



## locationSectionPartialUpdate

> LocationSection locationSectionPartialUpdate(opts)



API endpoint for managing the Location Section titles. Supports retrieving and updating the primary and secondary titles. Only one instance should exist.

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

let apiInstance = new TimesheetApi.LocationSectionApi();
let opts = {
  'patchedLocationSectionRequest': new TimesheetApi.PatchedLocationSectionRequest() // PatchedLocationSectionRequest | 
};
apiInstance.locationSectionPartialUpdate(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patchedLocationSectionRequest** | [**PatchedLocationSectionRequest**](PatchedLocationSectionRequest.md)|  | [optional] 

### Return type

[**LocationSection**](LocationSection.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## locationSectionRetrieve

> LocationSection locationSectionRetrieve()



API endpoint for managing the Location Section titles. Supports retrieving and updating the primary and secondary titles. Only one instance should exist.

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

let apiInstance = new TimesheetApi.LocationSectionApi();
apiInstance.locationSectionRetrieve().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**LocationSection**](LocationSection.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## locationSectionUpdate

> LocationSection locationSectionUpdate(locationSectionRequest)



API endpoint for managing the Location Section titles. Supports retrieving and updating the primary and secondary titles. Only one instance should exist.

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

let apiInstance = new TimesheetApi.LocationSectionApi();
let locationSectionRequest = new TimesheetApi.LocationSectionRequest(); // LocationSectionRequest | 
apiInstance.locationSectionUpdate(locationSectionRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationSectionRequest** | [**LocationSectionRequest**](LocationSectionRequest.md)|  | 

### Return type

[**LocationSection**](LocationSection.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json

