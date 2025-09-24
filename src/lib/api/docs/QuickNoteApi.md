# TimesheetApi.QuickNoteApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**quicknotesCreate**](QuickNoteApi.md#quicknotesCreate) | **POST** /api/quicknotes/ | 
[**quicknotesDestroy**](QuickNoteApi.md#quicknotesDestroy) | **DELETE** /api/quicknotes/{id}/ | 
[**quicknotesList**](QuickNoteApi.md#quicknotesList) | **GET** /api/quicknotes/ | 
[**quicknotesPartialUpdate**](QuickNoteApi.md#quicknotesPartialUpdate) | **PATCH** /api/quicknotes/{id}/ | 
[**quicknotesRetrieve**](QuickNoteApi.md#quicknotesRetrieve) | **GET** /api/quicknotes/{id}/ | 
[**quicknotesUpdate**](QuickNoteApi.md#quicknotesUpdate) | **PUT** /api/quicknotes/{id}/ | 



## quicknotesCreate

> QuickNote quicknotesCreate(quickNoteRequest)



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

let apiInstance = new TimesheetApi.QuickNoteApi();
let quickNoteRequest = new TimesheetApi.QuickNoteRequest(); // QuickNoteRequest | 
apiInstance.quicknotesCreate(quickNoteRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **quickNoteRequest** | [**QuickNoteRequest**](QuickNoteRequest.md)|  | 

### Return type

[**QuickNote**](QuickNote.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## quicknotesDestroy

> quicknotesDestroy(id)



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

let apiInstance = new TimesheetApi.QuickNoteApi();
let id = 56; // Number | A unique integer value identifying this quick note.
apiInstance.quicknotesDestroy(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this quick note. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## quicknotesList

> PaginatedQuickNoteList quicknotesList(opts)



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

let apiInstance = new TimesheetApi.QuickNoteApi();
let opts = {
  'ordering': "ordering_example", // String | Which field to use when ordering the results.
  'page': 56 // Number | A page number within the paginated result set.
};
apiInstance.quicknotesList(opts).then((data) => {
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

[**PaginatedQuickNoteList**](PaginatedQuickNoteList.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## quicknotesPartialUpdate

> QuickNote quicknotesPartialUpdate(id, opts)



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

let apiInstance = new TimesheetApi.QuickNoteApi();
let id = 56; // Number | A unique integer value identifying this quick note.
let opts = {
  'patchedQuickNoteRequest': new TimesheetApi.PatchedQuickNoteRequest() // PatchedQuickNoteRequest | 
};
apiInstance.quicknotesPartialUpdate(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this quick note. | 
 **patchedQuickNoteRequest** | [**PatchedQuickNoteRequest**](PatchedQuickNoteRequest.md)|  | [optional] 

### Return type

[**QuickNote**](QuickNote.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## quicknotesRetrieve

> QuickNote quicknotesRetrieve(id)



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

let apiInstance = new TimesheetApi.QuickNoteApi();
let id = 56; // Number | A unique integer value identifying this quick note.
apiInstance.quicknotesRetrieve(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this quick note. | 

### Return type

[**QuickNote**](QuickNote.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## quicknotesUpdate

> QuickNote quicknotesUpdate(id, quickNoteRequest)



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

let apiInstance = new TimesheetApi.QuickNoteApi();
let id = 56; // Number | A unique integer value identifying this quick note.
let quickNoteRequest = new TimesheetApi.QuickNoteRequest(); // QuickNoteRequest | 
apiInstance.quicknotesUpdate(id, quickNoteRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this quick note. | 
 **quickNoteRequest** | [**QuickNoteRequest**](QuickNoteRequest.md)|  | 

### Return type

[**QuickNote**](QuickNote.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json

