export const REGEX_STRING_SERVER_URL = '^(?:(?:http(?:s)?|ftp)://)(?:\\S+(?::(?:\\S)*)?@)?(?:(?:[a-z0-9\u00a1-\uffff](?:-)*)*(?:[a-z0-9\u00a1-\uffff])+)(?:\\.(?:[a-z0-9\u00a1-\uffff](?:-)*)*(?:[a-z0-9\u00a1-\uffff])+)*(?:\\.(?:[a-z0-9\u00a1-\uffff]){2,})(?::(?:\\d){2,5})?(?:/(?:\\S)*)?$';


export const REGEX_STRING_EMAIL = '^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$';

export const REGEX_STRING_PHONE = '^\\+[0-9]{10,15}$';

export const REGEX_STRING_CODE = '^([a-zA-Z0-9_-]){3,12}$';