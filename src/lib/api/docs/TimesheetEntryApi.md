# TimesheetApi.TimesheetEntryApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**timesheetEntriesCreate**](TimesheetEntryApi.md#timesheetEntriesCreate) | **POST** /api/timesheet-entries/ | 
[**timesheetEntriesDestroy**](TimesheetEntryApi.md#timesheetEntriesDestroy) | **DELETE** /api/timesheet-entries/{id}/ | 
[**timesheetEntriesList**](TimesheetEntryApi.md#timesheetEntriesList) | **GET** /api/timesheet-entries/ | List timesheet entries
[**timesheetEntriesPartialUpdate**](TimesheetEntryApi.md#timesheetEntriesPartialUpdate) | **PATCH** /api/timesheet-entries/{id}/ | 
[**timesheetEntriesRetrieve**](TimesheetEntryApi.md#timesheetEntriesRetrieve) | **GET** /api/timesheet-entries/{id}/ | 
[**timesheetEntriesUpdate**](TimesheetEntryApi.md#timesheetEntriesUpdate) | **PUT** /api/timesheet-entries/{id}/ | 



## timesheetEntriesCreate

> TimesheetEntry timesheetEntriesCreate(timesheetEntryRequest)



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

let apiInstance = new TimesheetApi.TimesheetEntryApi();
let timesheetEntryRequest = new TimesheetApi.TimesheetEntryRequest(); // TimesheetEntryRequest | 
apiInstance.timesheetEntriesCreate(timesheetEntryRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **timesheetEntryRequest** | [**TimesheetEntryRequest**](TimesheetEntryRequest.md)|  | 

### Return type

[**TimesheetEntry**](TimesheetEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## timesheetEntriesDestroy

> timesheetEntriesDestroy(id)



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

let apiInstance = new TimesheetApi.TimesheetEntryApi();
let id = 56; // Number | A unique integer value identifying this timesheet entry.
apiInstance.timesheetEntriesDestroy(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this timesheet entry. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## timesheetEntriesList

> PaginatedTimesheetEntryList timesheetEntriesList(opts)

List timesheet entries

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

let apiInstance = new TimesheetApi.TimesheetEntryApi();
let opts = {
  'date': "date_example", // String | YYYY-MM-DD
  'employee': 56, // Number | Filter by employee id
  'ordering': "ordering_example", // String | Which field to use when ordering the results.
  'page': 56 // Number | A page number within the paginated result set.
};
apiInstance.timesheetEntriesList(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **date** | **String**| YYYY-MM-DD | [optional] 
 **employee** | **Number**| Filter by employee id | [optional] 
 **ordering** | **String**| Which field to use when ordering the results. | [optional] 
 **page** | **Number**| A page number within the paginated result set. | [optional] 

### Return type

[**PaginatedTimesheetEntryList**](PaginatedTimesheetEntryList.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## timesheetEntriesPartialUpdate

> TimesheetEntry timesheetEntriesPartialUpdate(id, opts)



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

let apiInstance = new TimesheetApi.TimesheetEntryApi();
let id = 56; // Number | A unique integer value identifying this timesheet entry.
let opts = {
  'patchedTimesheetEntryRequest': new TimesheetApi.PatchedTimesheetEntryRequest() // PatchedTimesheetEntryRequest | 
};
apiInstance.timesheetEntriesPartialUpdate(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this timesheet entry. | 
 **patchedTimesheetEntryRequest** | [**PatchedTimesheetEntryRequest**](PatchedTimesheetEntryRequest.md)|  | [optional] 

### Return type

[**TimesheetEntry**](TimesheetEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## timesheetEntriesRetrieve

> TimesheetEntry timesheetEntriesRetrieve(id)



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

let apiInstance = new TimesheetApi.TimesheetEntryApi();
let id = 56; // Number | A unique integer value identifying this timesheet entry.
apiInstance.timesheetEntriesRetrieve(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this timesheet entry. | 

### Return type

[**TimesheetEntry**](TimesheetEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## timesheetEntriesUpdate

> TimesheetEntry timesheetEntriesUpdate(id, timesheetEntryRequest)



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

let apiInstance = new TimesheetApi.TimesheetEntryApi();
let id = 56; // Number | A unique integer value identifying this timesheet entry.
let timesheetEntryRequest = new TimesheetApi.TimesheetEntryRequest(); // TimesheetEntryRequest | 
apiInstance.timesheetEntriesUpdate(id, timesheetEntryRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this timesheet entry. | 
 **timesheetEntryRequest** | [**TimesheetEntryRequest**](TimesheetEntryRequest.md)|  | 

### Return type

[**TimesheetEntry**](TimesheetEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json

