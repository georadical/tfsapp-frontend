# TimesheetApi.OperationApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**operationsCreate**](OperationApi.md#operationsCreate) | **POST** /api/operations/ | 
[**operationsDestroy**](OperationApi.md#operationsDestroy) | **DELETE** /api/operations/{id}/ | 
[**operationsList**](OperationApi.md#operationsList) | **GET** /api/operations/ | 
[**operationsPartialUpdate**](OperationApi.md#operationsPartialUpdate) | **PATCH** /api/operations/{id}/ | 
[**operationsRetrieve**](OperationApi.md#operationsRetrieve) | **GET** /api/operations/{id}/ | 
[**operationsUpdate**](OperationApi.md#operationsUpdate) | **PUT** /api/operations/{id}/ | 



## operationsCreate

> Operation operationsCreate(operationRequest)



Filters queryset by coordinator&#39;s allowed regions using a model-&gt;field map. Filtra el queryset por las regiones permitidas del coordinador usando un mapa modelo-&gt;campo.

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

let apiInstance = new TimesheetApi.OperationApi();
let operationRequest = new TimesheetApi.OperationRequest(); // OperationRequest | 
apiInstance.operationsCreate(operationRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **operationRequest** | [**OperationRequest**](OperationRequest.md)|  | 

### Return type

[**Operation**](Operation.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## operationsDestroy

> operationsDestroy(id)



Filters queryset by coordinator&#39;s allowed regions using a model-&gt;field map. Filtra el queryset por las regiones permitidas del coordinador usando un mapa modelo-&gt;campo.

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

let apiInstance = new TimesheetApi.OperationApi();
let id = 56; // Number | A unique integer value identifying this operation.
apiInstance.operationsDestroy(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this operation. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## operationsList

> PaginatedOperationList operationsList(opts)



Filters queryset by coordinator&#39;s allowed regions using a model-&gt;field map. Filtra el queryset por las regiones permitidas del coordinador usando un mapa modelo-&gt;campo.

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

let apiInstance = new TimesheetApi.OperationApi();
let opts = {
  'ordering': "ordering_example", // String | Which field to use when ordering the results.
  'page': 56 // Number | A page number within the paginated result set.
};
apiInstance.operationsList(opts).then((data) => {
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

[**PaginatedOperationList**](PaginatedOperationList.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## operationsPartialUpdate

> Operation operationsPartialUpdate(id, opts)



Filters queryset by coordinator&#39;s allowed regions using a model-&gt;field map. Filtra el queryset por las regiones permitidas del coordinador usando un mapa modelo-&gt;campo.

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

let apiInstance = new TimesheetApi.OperationApi();
let id = 56; // Number | A unique integer value identifying this operation.
let opts = {
  'patchedOperationRequest': new TimesheetApi.PatchedOperationRequest() // PatchedOperationRequest | 
};
apiInstance.operationsPartialUpdate(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this operation. | 
 **patchedOperationRequest** | [**PatchedOperationRequest**](PatchedOperationRequest.md)|  | [optional] 

### Return type

[**Operation**](Operation.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## operationsRetrieve

> Operation operationsRetrieve(id)



Filters queryset by coordinator&#39;s allowed regions using a model-&gt;field map. Filtra el queryset por las regiones permitidas del coordinador usando un mapa modelo-&gt;campo.

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

let apiInstance = new TimesheetApi.OperationApi();
let id = 56; // Number | A unique integer value identifying this operation.
apiInstance.operationsRetrieve(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this operation. | 

### Return type

[**Operation**](Operation.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## operationsUpdate

> Operation operationsUpdate(id, operationRequest)



Filters queryset by coordinator&#39;s allowed regions using a model-&gt;field map. Filtra el queryset por las regiones permitidas del coordinador usando un mapa modelo-&gt;campo.

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

let apiInstance = new TimesheetApi.OperationApi();
let id = 56; // Number | A unique integer value identifying this operation.
let operationRequest = new TimesheetApi.OperationRequest(); // OperationRequest | 
apiInstance.operationsUpdate(id, operationRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this operation. | 
 **operationRequest** | [**OperationRequest**](OperationRequest.md)|  | 

### Return type

[**Operation**](Operation.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json

