# TimesheetApi.ValueStatementApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**valueStatementCreate**](ValueStatementApi.md#valueStatementCreate) | **POST** /api/value-statement/ | 
[**valueStatementDestroy**](ValueStatementApi.md#valueStatementDestroy) | **DELETE** /api/value-statement/{id}/ | 
[**valueStatementList**](ValueStatementApi.md#valueStatementList) | **GET** /api/value-statement/ | 
[**valueStatementPartialUpdate**](ValueStatementApi.md#valueStatementPartialUpdate) | **PATCH** /api/value-statement/{id}/ | 
[**valueStatementRetrieve**](ValueStatementApi.md#valueStatementRetrieve) | **GET** /api/value-statement/{id}/ | 
[**valueStatementUpdate**](ValueStatementApi.md#valueStatementUpdate) | **PUT** /api/value-statement/{id}/ | 



## valueStatementCreate

> ValueStatement valueStatementCreate(valueStatementRequest)



ViewSet for viewing and editing value statements. Provides CRUD operations through the API.

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

let apiInstance = new TimesheetApi.ValueStatementApi();
let valueStatementRequest = new TimesheetApi.ValueStatementRequest(); // ValueStatementRequest | 
apiInstance.valueStatementCreate(valueStatementRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **valueStatementRequest** | [**ValueStatementRequest**](ValueStatementRequest.md)|  | 

### Return type

[**ValueStatement**](ValueStatement.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## valueStatementDestroy

> valueStatementDestroy(id)



ViewSet for viewing and editing value statements. Provides CRUD operations through the API.

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

let apiInstance = new TimesheetApi.ValueStatementApi();
let id = 56; // Number | A unique integer value identifying this Value Statement.
apiInstance.valueStatementDestroy(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this Value Statement. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## valueStatementList

> PaginatedValueStatementList valueStatementList(opts)



ViewSet for viewing and editing value statements. Provides CRUD operations through the API.

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

let apiInstance = new TimesheetApi.ValueStatementApi();
let opts = {
  'ordering': "ordering_example", // String | Which field to use when ordering the results.
  'page': 56 // Number | A page number within the paginated result set.
};
apiInstance.valueStatementList(opts).then((data) => {
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

[**PaginatedValueStatementList**](PaginatedValueStatementList.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## valueStatementPartialUpdate

> ValueStatement valueStatementPartialUpdate(id, opts)



ViewSet for viewing and editing value statements. Provides CRUD operations through the API.

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

let apiInstance = new TimesheetApi.ValueStatementApi();
let id = 56; // Number | A unique integer value identifying this Value Statement.
let opts = {
  'patchedValueStatementRequest': new TimesheetApi.PatchedValueStatementRequest() // PatchedValueStatementRequest | 
};
apiInstance.valueStatementPartialUpdate(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this Value Statement. | 
 **patchedValueStatementRequest** | [**PatchedValueStatementRequest**](PatchedValueStatementRequest.md)|  | [optional] 

### Return type

[**ValueStatement**](ValueStatement.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## valueStatementRetrieve

> ValueStatement valueStatementRetrieve(id)



ViewSet for viewing and editing value statements. Provides CRUD operations through the API.

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

let apiInstance = new TimesheetApi.ValueStatementApi();
let id = 56; // Number | A unique integer value identifying this Value Statement.
apiInstance.valueStatementRetrieve(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this Value Statement. | 

### Return type

[**ValueStatement**](ValueStatement.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## valueStatementUpdate

> ValueStatement valueStatementUpdate(id, valueStatementRequest)



ViewSet for viewing and editing value statements. Provides CRUD operations through the API.

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

let apiInstance = new TimesheetApi.ValueStatementApi();
let id = 56; // Number | A unique integer value identifying this Value Statement.
let valueStatementRequest = new TimesheetApi.ValueStatementRequest(); // ValueStatementRequest | 
apiInstance.valueStatementUpdate(id, valueStatementRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this Value Statement. | 
 **valueStatementRequest** | [**ValueStatementRequest**](ValueStatementRequest.md)|  | 

### Return type

[**ValueStatement**](ValueStatement.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json

