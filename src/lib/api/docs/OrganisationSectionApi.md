# TimesheetApi.OrganisationSectionApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**organisationSectionList**](OrganisationSectionApi.md#organisationSectionList) | **GET** /api/organisation-section/ | 
[**organisationSectionPartialUpdate**](OrganisationSectionApi.md#organisationSectionPartialUpdate) | **PATCH** /api/organisation-section/{id}/ | 
[**organisationSectionRetrieve**](OrganisationSectionApi.md#organisationSectionRetrieve) | **GET** /api/organisation-section/{id}/ | 
[**organisationSectionUpdate**](OrganisationSectionApi.md#organisationSectionUpdate) | **PUT** /api/organisation-section/{id}/ | 



## organisationSectionList

> PaginatedOrganisationSectionList organisationSectionList(opts)



ViewSet for managing the organisation section metadata. Supports GET, PUT, and PATCH operations.

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

let apiInstance = new TimesheetApi.OrganisationSectionApi();
let opts = {
  'ordering': "ordering_example", // String | Which field to use when ordering the results.
  'page': 56 // Number | A page number within the paginated result set.
};
apiInstance.organisationSectionList(opts).then((data) => {
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

[**PaginatedOrganisationSectionList**](PaginatedOrganisationSectionList.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## organisationSectionPartialUpdate

> OrganisationSection organisationSectionPartialUpdate(id, opts)



ViewSet for managing the organisation section metadata. Supports GET, PUT, and PATCH operations.

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

let apiInstance = new TimesheetApi.OrganisationSectionApi();
let id = 56; // Number | A unique integer value identifying this Organisation Section.
let opts = {
  'patchedOrganisationSectionRequest': new TimesheetApi.PatchedOrganisationSectionRequest() // PatchedOrganisationSectionRequest | 
};
apiInstance.organisationSectionPartialUpdate(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this Organisation Section. | 
 **patchedOrganisationSectionRequest** | [**PatchedOrganisationSectionRequest**](PatchedOrganisationSectionRequest.md)|  | [optional] 

### Return type

[**OrganisationSection**](OrganisationSection.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## organisationSectionRetrieve

> OrganisationSection organisationSectionRetrieve(id)



ViewSet for managing the organisation section metadata. Supports GET, PUT, and PATCH operations.

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

let apiInstance = new TimesheetApi.OrganisationSectionApi();
let id = 56; // Number | A unique integer value identifying this Organisation Section.
apiInstance.organisationSectionRetrieve(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this Organisation Section. | 

### Return type

[**OrganisationSection**](OrganisationSection.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## organisationSectionUpdate

> OrganisationSection organisationSectionUpdate(id, organisationSectionRequest)



ViewSet for managing the organisation section metadata. Supports GET, PUT, and PATCH operations.

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

let apiInstance = new TimesheetApi.OrganisationSectionApi();
let id = 56; // Number | A unique integer value identifying this Organisation Section.
let organisationSectionRequest = new TimesheetApi.OrganisationSectionRequest(); // OrganisationSectionRequest | 
apiInstance.organisationSectionUpdate(id, organisationSectionRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this Organisation Section. | 
 **organisationSectionRequest** | [**OrganisationSectionRequest**](OrganisationSectionRequest.md)|  | 

### Return type

[**OrganisationSection**](OrganisationSection.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json

