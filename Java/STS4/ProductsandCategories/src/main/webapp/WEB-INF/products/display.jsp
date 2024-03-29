<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!-- c:out ; c:forEach etc. -->
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!-- Formatting (dates) -->
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<!-- form:form -->
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!-- for rendering errors on PUT routes -->
<%@ page isErrorPage="true"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Display</title>
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/main.css">
<!-- change to match your file/naming structure -->
<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
<script type="text/javascript" src="/js/app.js"></script>
<!-- change to match your file/naming structure -->
</head>
<body>
	<div class="card" style="width: 18rem;">
		<div class="card-body">
			<h5 class="card-title">
				<c:out value="${product.name}"></c:out>
			</h5>
			<p class="card-text">
				Description:
				<c:out value="${product.description }"></c:out>
			</p>
			<p class="card-text">
				Price:
				<c:out value="$${product.price }"></c:out>
			</p>
			<p class="card-text">
				Category:
				<c:forEach var="categories" items="${productsWithCategories }">
					<c:out value="${categories.name},">
					</c:out>
				</c:forEach>

			</p>

			<a href="/" class="btn btn-primary">Home</a>
		</div>


		<div class="container">
			<form action="/products/add" method="post">
				<input type="hidden" name="productId" value="${product.id }" /> <select
					name="categoryId">
					<c:forEach var="oneCategory" items="${allCategories }">
						<option value="${oneCategory.id }">${oneCategory.name }</option>
					</c:forEach>
				</select>
				<button class="btn btn-success">Add</button>
			</form>
		</div>

		<%-- <form action="/products/addCategories">
			<input type="hidden" name="productId" value="${product.id}" /> <select
				name="productId">
				<c:forEach var="oneCategory" items="${allCategories }">
					<option value="${oneCategory.name }">${oneCategory.name }</option>

				</c:forEach>
			</select>
		</form> --%>
	</div>
</body>
</html>