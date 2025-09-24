# TimesheetApi.ContactApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**contactCreate**](ContactApi.md#contactCreate) | **POST** /api/contact/ | 



## contactCreate

> ContactMessage contactCreate(contactMessageRequest)



API endpoint that allows users to submit contact form messages.  This endpoint accepts POST requests with name, email, and message fields. No authentication is required to submit a contact message. Upon successful submission, an email is sent to the configured recipient.

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

let apiInstance = new TimesheetApi.ContactApi();
let contactMessageRequest = new TimesheetApi.ContactMessageRequest(); // ContactMessageRequest | 
apiInstance.contactCreate(contactMessageRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contactMessageRequest** | [**ContactMessageRequest**](ContactMessageRequest.md)|  | 

### Return type

[**ContactMessage**](ContactMessage.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json

