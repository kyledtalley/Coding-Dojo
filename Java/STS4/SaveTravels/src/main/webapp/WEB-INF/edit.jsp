<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!-- c:out ; c:forEach etc. -->
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!-- Formatting (dates) -->
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<!-- form:form -->
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!-- for rendering errors on PUT routes -->

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Expenses</title>
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/main.css">
<!-- change to match your file/naming structure -->
<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
<script type="text/javascript" src="/js/app.js"></script>
<!-- change to match your file/naming structure -->
</head>
<body>
	<div class="container p-3">
		<h1>Update Expense</h1>
		<form:form class="border border-dark p-3 bg-secondary text-light"
			action="/expenses/${expenseToUpdate.id}" method="post" modelAttribute="expenseToUpdate">
			<form:hidden path="id"/>
			<!-- This hidden input is needed to create a put request -->
			<input type="hidden" name="_method" value="put"/>
			<div class="mb-3">
				<form:label path="name" class="form-label">Expense name</form:label>
				<form:input path="name" class="form-control" />

			</div>
			<div class="mb-3">
				<form:label path="vendor" class="form-label">Vendor name</form:label>
				<form:input path="vendor" class="form-control"/>
		
			</div>

			<div class="mb-3 d-flex flex-column">
				<form:label path="amount" class="form-label">Price</form:label>
				<form:input path ="amount" class = "form-control"/>

			</div>

			<button type="submit" class="btn btn-primary">Submit</button>
		</form:form>
	</div>

</body>
</html>