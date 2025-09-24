# TimesheetApi.RegionApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**regionsCreate**](RegionApi.md#regionsCreate) | **POST** /api/regions/ | 
[**regionsDestroy**](RegionApi.md#regionsDestroy) | **DELETE** /api/regions/{id}/ | 
[**regionsList**](RegionApi.md#regionsList) | **GET** /api/regions/ | 
[**regionsPartialUpdate**](RegionApi.md#regionsPartialUpdate) | **PATCH** /api/regions/{id}/ | 
[**regionsRetrieve**](RegionApi.md#regionsRetrieve) | **GET** /api/regions/{id}/ | 
[**regionsUpdate**](RegionApi.md#regionsUpdate) | **PUT** /api/regions/{id}/ | 



## regionsCreate

> Region regionsCreate(regionRequest)



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

let apiInstance = new TimesheetApi.RegionApi();
let regionRequest = new TimesheetApi.RegionRequest(); // RegionRequest | 
apiInstance.regionsCreate(regionRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **regionRequest** | [**RegionRequest**](RegionRequest.md)|  | 

### Return type

[**Region**](Region.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## regionsDestroy

> regionsDestroy(id)



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

let apiInstance = new TimesheetApi.RegionApi();
let id = 56; // Number | A unique integer value identifying this Region.
apiInstance.regionsDestroy(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this Region. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## regionsList

> PaginatedRegionList regionsList(opts)



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

let apiInstance = new TimesheetApi.RegionApi();
let opts = {
  'ordering': "ordering_example", // String | Which field to use when ordering the results.
  'page': 56 // Number | A page number within the paginated result set.
};
apiInstance.regionsList(opts).then((data) => {
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

[**PaginatedRegionList**](PaginatedRegionList.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## regionsPartialUpdate

> Region regionsPartialUpdate(id, opts)



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

let apiInstance = new TimesheetApi.RegionApi();
let id = 56; // Number | A unique integer value identifying this Region.
let opts = {
  'patchedRegionRequest': new TimesheetApi.PatchedRegionRequest() // PatchedRegionRequest | 
};
apiInstance.regionsPartialUpdate(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this Region. | 
 **patchedRegionRequest** | [**PatchedRegionRequest**](PatchedRegionRequest.md)|  | [optional] 

### Return type

[**Region**](Region.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## regionsRetrieve

> Region regionsRetrieve(id)



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

let apiInstance = new TimesheetApi.RegionApi();
let id = 56; // Number | A unique integer value identifying this Region.
apiInstance.regionsRetrieve(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this Region. | 

### Return type

[**Region**](Region.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## regionsUpdate

> Region regionsUpdate(id, regionRequest)



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

let apiInstance = new TimesheetApi.RegionApi();
let id = 56; // Number | A unique integer value identifying this Region.
let regionRequest = new TimesheetApi.RegionRequest(); // RegionRequest | 
apiInstance.regionsUpdate(id, regionRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this Region. | 
 **regionRequest** | [**RegionRequest**](RegionRequest.md)|  | 

### Return type

[**Region**](Region.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json

