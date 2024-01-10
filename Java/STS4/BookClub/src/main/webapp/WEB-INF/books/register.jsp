<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!-- c:out ; c:forEach etc. --> 
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<!-- Formatting (dates) --> 
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"  %>
<!-- form:form -->
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!-- for rendering errors on PUT routes -->
<%@ page isErrorPage="true" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Register a Book</title>
    <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="/css/main.css"> <!-- change to match your file/naming structure -->
    <script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="/js/app.js"></script><!-- change to match your file/naming structure -->
</head>
<body>
   <div class="container">
   	<form:form action="/books/register" method="post" modelAttribute="book">
   		<div class="form-group">
   			<form:label path="title">Title:</form:label>
   			<form:input path="title"/>
   		</div>
   		<div class="form-group">
   			<form:label path="author">Author</form:label>
   			<form:input path="author"/>
   		</div>
   		<div class="form-group">
   			<form:label path="thoughts">Thoughts:</form:label>
   			<form:input path="thoughts"/>
   		</div>
   		<input type="hidden" id = "user_id" name = "user_id" value = "user_id">
   		<button class="btn btn-dark">Register</button>
   	</form:form>
   </div>
</body>
</html>