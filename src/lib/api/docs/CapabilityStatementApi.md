# TimesheetApi.CapabilityStatementApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**capabilityStatementCreate**](CapabilityStatementApi.md#capabilityStatementCreate) | **POST** /api/capability-statement/ | 
[**capabilityStatementDestroy**](CapabilityStatementApi.md#capabilityStatementDestroy) | **DELETE** /api/capability-statement/{id}/ | 
[**capabilityStatementList**](CapabilityStatementApi.md#capabilityStatementList) | **GET** /api/capability-statement/ | 
[**capabilityStatementPartialUpdate**](CapabilityStatementApi.md#capabilityStatementPartialUpdate) | **PATCH** /api/capability-statement/{id}/ | 
[**capabilityStatementRetrieve**](CapabilityStatementApi.md#capabilityStatementRetrieve) | **GET** /api/capability-statement/{id}/ | 
[**capabilityStatementUpdate**](CapabilityStatementApi.md#capabilityStatementUpdate) | **PUT** /api/capability-statement/{id}/ | 



## capabilityStatementCreate

> CapabilityStatement capabilityStatementCreate(capabilityStatementRequest)



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

let apiInstance = new TimesheetApi.CapabilityStatementApi();
let capabilityStatementRequest = new TimesheetApi.CapabilityStatementRequest(); // CapabilityStatementRequest | 
apiInstance.capabilityStatementCreate(capabilityStatementRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **capabilityStatementRequest** | [**CapabilityStatementRequest**](CapabilityStatementRequest.md)|  | 

### Return type

[**CapabilityStatement**](CapabilityStatement.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## capabilityStatementDestroy

> capabilityStatementDestroy(id)



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

let apiInstance = new TimesheetApi.CapabilityStatementApi();
let id = 56; // Number | A unique integer value identifying this Capability Statement.
apiInstance.capabilityStatementDestroy(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this Capability Statement. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## capabilityStatementList

> PaginatedCapabilityStatementList capabilityStatementList(opts)



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

let apiInstance = new TimesheetApi.CapabilityStatementApi();
let opts = {
  'ordering': "ordering_example", // String | Which field to use when ordering the results.
  'page': 56 // Number | A page number within the paginated result set.
};
apiInstance.capabilityStatementList(opts).then((data) => {
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

[**PaginatedCapabilityStatementList**](PaginatedCapabilityStatementList.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## capabilityStatementPartialUpdate

> CapabilityStatement capabilityStatementPartialUpdate(id, opts)



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

let apiInstance = new TimesheetApi.CapabilityStatementApi();
let id = 56; // Number | A unique integer value identifying this Capability Statement.
let opts = {
  'patchedCapabilityStatementRequest': new TimesheetApi.PatchedCapabilityStatementRequest() // PatchedCapabilityStatementRequest | 
};
apiInstance.capabilityStatementPartialUpdate(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this Capability Statement. | 
 **patchedCapabilityStatementRequest** | [**PatchedCapabilityStatementRequest**](PatchedCapabilityStatementRequest.md)|  | [optional] 

### Return type

[**CapabilityStatement**](CapabilityStatement.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## capabilityStatementRetrieve

> CapabilityStatement capabilityStatementRetrieve(id)



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

let apiInstance = new TimesheetApi.CapabilityStatementApi();
let id = 56; // Number | A unique integer value identifying this Capability Statement.
apiInstance.capabilityStatementRetrieve(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this Capability Statement. | 

### Return type

[**CapabilityStatement**](CapabilityStatement.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## capabilityStatementUpdate

> CapabilityStatement capabilityStatementUpdate(id, capabilityStatementRequest)



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

let apiInstance = new TimesheetApi.CapabilityStatementApi();
let id = 56; // Number | A unique integer value identifying this Capability Statement.
let capabilityStatementRequest = new TimesheetApi.CapabilityStatementRequest(); // CapabilityStatementRequest | 
apiInstance.capabilityStatementUpdate(id, capabilityStatementRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this Capability Statement. | 
 **capabilityStatementRequest** | [**CapabilityStatementRequest**](CapabilityStatementRequest.md)|  | 

### Return type

[**CapabilityStatement**](CapabilityStatement.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json

