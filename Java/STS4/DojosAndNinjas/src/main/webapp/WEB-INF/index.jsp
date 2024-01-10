<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"  %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>TITLE</title>
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
<link rel="stylesheet" type="text/css" href="/css/style.css">
 <script type="text/javascript" src="/js/app.js"></script>
</head>
<body>
	<h1>New Dojo</h1>
	<form:form action = "/dojos" method="POST" modelAttribute="dojo">
	<form:label path = "name">Name: </form:label>
	<form:input path="name"/>
	<form:errors path="name"/>
	<button type="submit" class="btn btn-primary">Submit</button>
	</form:form>
</body>
</html>