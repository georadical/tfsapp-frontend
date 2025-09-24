# TimesheetApi.SocialMediaApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**socialMediaCreate**](SocialMediaApi.md#socialMediaCreate) | **POST** /api/social-media/ | 
[**socialMediaDestroy**](SocialMediaApi.md#socialMediaDestroy) | **DELETE** /api/social-media/{id}/ | 
[**socialMediaList**](SocialMediaApi.md#socialMediaList) | **GET** /api/social-media/ | 
[**socialMediaPartialUpdate**](SocialMediaApi.md#socialMediaPartialUpdate) | **PATCH** /api/social-media/{id}/ | 
[**socialMediaRetrieve**](SocialMediaApi.md#socialMediaRetrieve) | **GET** /api/social-media/{id}/ | 
[**socialMediaUpdate**](SocialMediaApi.md#socialMediaUpdate) | **PUT** /api/social-media/{id}/ | 



## socialMediaCreate

> SocialMedia socialMediaCreate(socialMediaRequest)



ViewSet for managing social media links. Provides CRUD operations for social media platforms that appear on the site.  GET: Returns a list of all active social media platforms POST, PUT, PATCH, DELETE: Available to admin users for managing social media links

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

let apiInstance = new TimesheetApi.SocialMediaApi();
let socialMediaRequest = new TimesheetApi.SocialMediaRequest(); // SocialMediaRequest | 
apiInstance.socialMediaCreate(socialMediaRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **socialMediaRequest** | [**SocialMediaRequest**](SocialMediaRequest.md)|  | 

### Return type

[**SocialMedia**](SocialMedia.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## socialMediaDestroy

> socialMediaDestroy(id)



ViewSet for managing social media links. Provides CRUD operations for social media platforms that appear on the site.  GET: Returns a list of all active social media platforms POST, PUT, PATCH, DELETE: Available to admin users for managing social media links

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

let apiInstance = new TimesheetApi.SocialMediaApi();
let id = 56; // Number | A unique integer value identifying this Social Media.
apiInstance.socialMediaDestroy(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this Social Media. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## socialMediaList

> PaginatedSocialMediaList socialMediaList(opts)



ViewSet for managing social media links. Provides CRUD operations for social media platforms that appear on the site.  GET: Returns a list of all active social media platforms POST, PUT, PATCH, DELETE: Available to admin users for managing social media links

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

let apiInstance = new TimesheetApi.SocialMediaApi();
let opts = {
  'ordering': "ordering_example", // String | Which field to use when ordering the results.
  'page': 56 // Number | A page number within the paginated result set.
};
apiInstance.socialMediaList(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ordering** | **String**| Which field to use when ordering the results. | [optional] 
 **page** | **Number**| A page number within the paginated result set. | [optional] 

### Return type

[**PaginatedSocialMediaList**](PaginatedSocialMediaList.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## socialMediaPartialUpdate

> SocialMedia socialMediaPartialUpdate(id, opts)



ViewSet for managing social media links. Provides CRUD operations for social media platforms that appear on the site.  GET: Returns a list of all active social media platforms POST, PUT, PATCH, DELETE: Available to admin users for managing social media links

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

let apiInstance = new TimesheetApi.SocialMediaApi();
let id = 56; // Number | A unique integer value identifying this Social Media.
let opts = {
  'patchedSocialMediaRequest': new TimesheetApi.PatchedSocialMediaRequest() // PatchedSocialMediaRequest | 
};
apiInstance.socialMediaPartialUpdate(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this Social Media. | 
 **patchedSocialMediaRequest** | [**PatchedSocialMediaRequest**](PatchedSocialMediaRequest.md)|  | [optional] 

### Return type

[**SocialMedia**](SocialMedia.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## socialMediaRetrieve

> SocialMedia socialMediaRetrieve(id)



ViewSet for managing social media links. Provides CRUD operations for social media platforms that appear on the site.  GET: Returns a list of all active social media platforms POST, PUT, PATCH, DELETE: Available to admin users for managing social media links

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

let apiInstance = new TimesheetApi.SocialMediaApi();
let id = 56; // Number | A unique integer value identifying this Social Media.
apiInstance.socialMediaRetrieve(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this Social Media. | 

### Return type

[**SocialMedia**](SocialMedia.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## socialMediaUpdate

> SocialMedia socialMediaUpdate(id, socialMediaRequest)



ViewSet for managing social media links. Provides CRUD operations for social media platforms that appear on the site.  GET: Returns a list of all active social media platforms POST, PUT, PATCH, DELETE: Available to admin users for managing social media links

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

let apiInstance = new TimesheetApi.SocialMediaApi();
let id = 56; // Number | A unique integer value identifying this Social Media.
let socialMediaRequest = new TimesheetApi.SocialMediaRequest(); // SocialMediaRequest | 
apiInstance.socialMediaUpdate(id, socialMediaRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this Social Media. | 
 **socialMediaRequest** | [**SocialMediaRequest**](SocialMediaRequest.md)|  | 

### Return type

[**SocialMedia**](SocialMedia.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json

