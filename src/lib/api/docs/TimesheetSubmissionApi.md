# TimesheetApi.TimesheetSubmissionApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**submissionsApproveCreate**](TimesheetSubmissionApi.md#submissionsApproveCreate) | **POST** /api/submissions/{id}/approve/ | 
[**submissionsCreate**](TimesheetSubmissionApi.md#submissionsCreate) | **POST** /api/submissions/ | 
[**submissionsDestroy**](TimesheetSubmissionApi.md#submissionsDestroy) | **DELETE** /api/submissions/{id}/ | 
[**submissionsList**](TimesheetSubmissionApi.md#submissionsList) | **GET** /api/submissions/ | 
[**submissionsLockCreate**](TimesheetSubmissionApi.md#submissionsLockCreate) | **POST** /api/submissions/{id}/lock/ | 
[**submissionsPartialUpdate**](TimesheetSubmissionApi.md#submissionsPartialUpdate) | **PATCH** /api/submissions/{id}/ | 
[**submissionsRejectCreate**](TimesheetSubmissionApi.md#submissionsRejectCreate) | **POST** /api/submissions/{id}/reject/ | 
[**submissionsRetrieve**](TimesheetSubmissionApi.md#submissionsRetrieve) | **GET** /api/submissions/{id}/ | 
[**submissionsSubmitCreate**](TimesheetSubmissionApi.md#submissionsSubmitCreate) | **POST** /api/submissions/{id}/submit/ | 
[**submissionsUpdate**](TimesheetSubmissionApi.md#submissionsUpdate) | **PUT** /api/submissions/{id}/ | 



## submissionsApproveCreate

> TimesheetSubmission submissionsApproveCreate(id, timesheetSubmissionRequest)



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

let apiInstance = new TimesheetApi.TimesheetSubmissionApi();
let id = 56; // Number | A unique integer value identifying this timesheet submission.
let timesheetSubmissionRequest = new TimesheetApi.TimesheetSubmissionRequest(); // TimesheetSubmissionRequest | 
apiInstance.submissionsApproveCreate(id, timesheetSubmissionRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this timesheet submission. | 
 **timesheetSubmissionRequest** | [**TimesheetSubmissionRequest**](TimesheetSubmissionRequest.md)|  | 

### Return type

[**TimesheetSubmission**](TimesheetSubmission.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## submissionsCreate

> TimesheetSubmission submissionsCreate(timesheetSubmissionRequest)



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

let apiInstance = new TimesheetApi.TimesheetSubmissionApi();
let timesheetSubmissionRequest = new TimesheetApi.TimesheetSubmissionRequest(); // TimesheetSubmissionRequest | 
apiInstance.submissionsCreate(timesheetSubmissionRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **timesheetSubmissionRequest** | [**TimesheetSubmissionRequest**](TimesheetSubmissionRequest.md)|  | 

### Return type

[**TimesheetSubmission**](TimesheetSubmission.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## submissionsDestroy

> submissionsDestroy(id)



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

let apiInstance = new TimesheetApi.TimesheetSubmissionApi();
let id = 56; // Number | A unique integer value identifying this timesheet submission.
apiInstance.submissionsDestroy(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this timesheet submission. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## submissionsList

> PaginatedTimesheetSubmissionList submissionsList(opts)



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

let apiInstance = new TimesheetApi.TimesheetSubmissionApi();
let opts = {
  'ordering': "ordering_example", // String | Which field to use when ordering the results.
  'page': 56 // Number | A page number within the paginated result set.
};
apiInstance.submissionsList(opts).then((data) => {
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

[**PaginatedTimesheetSubmissionList**](PaginatedTimesheetSubmissionList.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## submissionsLockCreate

> TimesheetSubmission submissionsLockCreate(id, timesheetSubmissionRequest)



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

let apiInstance = new TimesheetApi.TimesheetSubmissionApi();
let id = 56; // Number | A unique integer value identifying this timesheet submission.
let timesheetSubmissionRequest = new TimesheetApi.TimesheetSubmissionRequest(); // TimesheetSubmissionRequest | 
apiInstance.submissionsLockCreate(id, timesheetSubmissionRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this timesheet submission. | 
 **timesheetSubmissionRequest** | [**TimesheetSubmissionRequest**](TimesheetSubmissionRequest.md)|  | 

### Return type

[**TimesheetSubmission**](TimesheetSubmission.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## submissionsPartialUpdate

> TimesheetSubmission submissionsPartialUpdate(id, opts)



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

let apiInstance = new TimesheetApi.TimesheetSubmissionApi();
let id = 56; // Number | A unique integer value identifying this timesheet submission.
let opts = {
  'patchedTimesheetSubmissionRequest': new TimesheetApi.PatchedTimesheetSubmissionRequest() // PatchedTimesheetSubmissionRequest | 
};
apiInstance.submissionsPartialUpdate(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this timesheet submission. | 
 **patchedTimesheetSubmissionRequest** | [**PatchedTimesheetSubmissionRequest**](PatchedTimesheetSubmissionRequest.md)|  | [optional] 

### Return type

[**TimesheetSubmission**](TimesheetSubmission.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## submissionsRejectCreate

> TimesheetSubmission submissionsRejectCreate(id, timesheetSubmissionRequest)



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

let apiInstance = new TimesheetApi.TimesheetSubmissionApi();
let id = 56; // Number | A unique integer value identifying this timesheet submission.
let timesheetSubmissionRequest = new TimesheetApi.TimesheetSubmissionRequest(); // TimesheetSubmissionRequest | 
apiInstance.submissionsRejectCreate(id, timesheetSubmissionRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this timesheet submission. | 
 **timesheetSubmissionRequest** | [**TimesheetSubmissionRequest**](TimesheetSubmissionRequest.md)|  | 

### Return type

[**TimesheetSubmission**](TimesheetSubmission.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## submissionsRetrieve

> TimesheetSubmission submissionsRetrieve(id)



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

let apiInstance = new TimesheetApi.TimesheetSubmissionApi();
let id = 56; // Number | A unique integer value identifying this timesheet submission.
apiInstance.submissionsRetrieve(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this timesheet submission. | 

### Return type

[**TimesheetSubmission**](TimesheetSubmission.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## submissionsSubmitCreate

> TimesheetSubmission submissionsSubmitCreate(id, timesheetSubmissionRequest)



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

let apiInstance = new TimesheetApi.TimesheetSubmissionApi();
let id = 56; // Number | A unique integer value identifying this timesheet submission.
let timesheetSubmissionRequest = new TimesheetApi.TimesheetSubmissionRequest(); // TimesheetSubmissionRequest | 
apiInstance.submissionsSubmitCreate(id, timesheetSubmissionRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this timesheet submission. | 
 **timesheetSubmissionRequest** | [**TimesheetSubmissionRequest**](TimesheetSubmissionRequest.md)|  | 

### Return type

[**TimesheetSubmission**](TimesheetSubmission.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## submissionsUpdate

> TimesheetSubmission submissionsUpdate(id, timesheetSubmissionRequest)



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

let apiInstance = new TimesheetApi.TimesheetSubmissionApi();
let id = 56; // Number | A unique integer value identifying this timesheet submission.
let timesheetSubmissionRequest = new TimesheetApi.TimesheetSubmissionRequest(); // TimesheetSubmissionRequest | 
apiInstance.submissionsUpdate(id, timesheetSubmissionRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this timesheet submission. | 
 **timesheetSubmissionRequest** | [**TimesheetSubmissionRequest**](TimesheetSubmissionRequest.md)|  | 

### Return type

[**TimesheetSubmission**](TimesheetSubmission.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json

