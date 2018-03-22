# REST APIs and HTTP

- **REST** - Representational State Transfer
  - Architecture style for designing networked applications
  - Relies on a stateless, client-server protocol, almost always HTTP
  - Treats server objects as resources that can be created, destroyed
  - Can be used by virtually any programming language
  - All APIs have their own rules and structure

- **HTTP** Request
  - GET: Retrieve data from a specified resource
  - POST: Submit data to be processed to a specified resource
  - PUT: Update a specified resource
  - DELETE: Delete a specified resource

  - HEAD: Same as GET but does not return a body
  - OPTIONS: Returns the supported HTTP methods
  - PATCH: Update partial resources

- **API Endpoints** or **Routes**

  | **Request**                 | **URL**                                              | **Use**                             |
  | --------------------------- | ---------------------------------------------------- | ----------------------------------- |
  | GET                         | https://someurl.com/api/users                        | Get all users                       |
  | GET                         | https://someurl.com/api/users/1                      | Get single user                     |
  | POST                        | https://someurl.com/api/users                        | Add user                            |
  | PUT                         | https://someurl.com/api/users/1                      | Update user                         |
  | DELETE                      | https://someurl.com/api/users/1                      | Delete user                         |
