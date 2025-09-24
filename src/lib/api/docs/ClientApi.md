# TimesheetApi.ClientApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**clientsCreate**](ClientApi.md#clientsCreate) | **POST** /api/clients/ | 
[**clientsDestroy**](ClientApi.md#clientsDestroy) | **DELETE** /api/clients/{id}/ | 
[**clientsList**](ClientApi.md#clientsList) | **GET** /api/clients/ | 
[**clientsPartialUpdate**](ClientApi.md#clientsPartialUpdate) | **PATCH** /api/clients/{id}/ | 
[**clientsRetrieve**](ClientApi.md#clientsRetrieve) | **GET** /api/clients/{id}/ | 
[**clientsUpdate**](ClientApi.md#clientsUpdate) | **PUT** /api/clients/{id}/ | 



## clientsCreate

> Client clientsCreate(clientRequest)



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

let apiInstance = new TimesheetApi.ClientApi();
let clientRequest = new TimesheetApi.ClientRequest(); // ClientRequest | 
apiInstance.clientsCreate(clientRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientRequest** | [**ClientRequest**](ClientRequest.md)|  | 

### Return type

[**Client**](Client.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## clientsDestroy

> clientsDestroy(id)



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

let apiInstance = new TimesheetApi.ClientApi();
let id = 56; // Number | A unique integer value identifying this Client.
apiInstance.clientsDestroy(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this Client. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## clientsList

> PaginatedClientList clientsList(opts)



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

let apiInstance = new TimesheetApi.ClientApi();
let opts = {
  'ordering': "ordering_example", // String | Which field to use when ordering the results.
  'page': 56 // Number | A page number within the paginated result set.
};
apiInstance.clientsList(opts).then((data) => {
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

[**PaginatedClientList**](PaginatedClientList.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## clientsPartialUpdate

> Client clientsPartialUpdate(id, opts)



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

let apiInstance = new TimesheetApi.ClientApi();
let id = 56; // Number | A unique integer value identifying this Client.
let opts = {
  'patchedClientRequest': new TimesheetApi.PatchedClientRequest() // PatchedClientRequest | 
};
apiInstance.clientsPartialUpdate(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this Client. | 
 **patchedClientRequest** | [**PatchedClientRequest**](PatchedClientRequest.md)|  | [optional] 

### Return type

[**Client**](Client.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## clientsRetrieve

> Client clientsRetrieve(id)



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

let apiInstance = new TimesheetApi.ClientApi();
let id = 56; // Number | A unique integer value identifying this Client.
apiInstance.clientsRetrieve(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this Client. | 

### Return type

[**Client**](Client.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## clientsUpdate

> Client clientsUpdate(id, clientRequest)



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

let apiInstance = new TimesheetApi.ClientApi();
let id = 56; // Number | A unique integer value identifying this Client.
let clientRequest = new TimesheetApi.ClientRequest(); // ClientRequest | 
apiInstance.clientsUpdate(id, clientRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this Client. | 
 **clientRequest** | [**ClientRequest**](ClientRequest.md)|  | 

### Return type

[**Client**](Client.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json

