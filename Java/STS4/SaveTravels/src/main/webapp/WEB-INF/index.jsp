<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Index</title>
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
<link rel="stylesheet" type="text/css" href="/css/style.css">
<script type="text/javascript" src="/js/app.js"></script>
</head>
<body>
	<div class="container">
	
		<h1>Log an expense</h1>
		<form:form class="border border-dark p-3 bg-secondary text-light" action="/expenses" method="POST" modelAttribute="expense">
			<div class="mb-3">
				<form:label path="name" class="form-label">Expense name</form:label>
				<form:input path="name" class="form-control" />
			</div>
			<div class="mb-3">
				<form:label path="vendor" class="form-label">Vendor</form:label>
				<form:input path="vendor" class = "form-control"/>
			</div>
			
			<div class="mb-3 d-flex flex-column">
				<form:label path="amount" class="form-label">Price</form:label>
				<form:input path="amount"/>
			</div>

			<button type="submit" class="btn btn-primary">Submit</button>
		</form:form>

		<table class="table table-striped table=dark mt-3">
			<thead>
				<tr>
					<th scope="col">Expense name</th>
					<th scope="col">Vendor name</th>
					<th scope="col">Price</th>
				</tr>
			</thead>
			<tbody>
				<c:forEach var="expense" items="${allExpenses}">
					<tr>
						<td><c:out value="${expense.name}"></c:out></td>
						<td><c:out value="${expense.vendor}"></c:out></td>
						<td><c:out value="$${expense.amount}"></c:out></td>
						<td>
							<a href="/expenses/edit/${expense.id}">Edit</a>
							<form action="/expenses/${expense.id}" method="post">
								<input type="hidden" name="_method" value="delete"/>
								<button>Delete</button>
							</form>
						</td>
					</tr>
				</c:forEach>
			</tbody>

		</table>

	</div>
</body>
</html>