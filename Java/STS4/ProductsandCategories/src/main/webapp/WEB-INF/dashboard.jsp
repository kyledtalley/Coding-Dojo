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
<title>Tacos</title>
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/main.css">
<!-- change to match your file/naming structure -->
<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
<script type="text/javascript" src="/js/app.js"></script>
<!-- change to match your file/naming structure -->
</head>
<body>
	<h1 class=" d-flex justify-content-center">Home Page</h1>


	<div class="container">
		<p>
			<a href="/products/new">New Product</a>
		</p>
		<p>
			<a href="/categories/new">New Category</a>
		</p>


		<div class="container d-flex">

			<table class="table mt-3 table-bordered table-striped">
				<thead>
					<tr>
						<th scope="col">Products</th>
					</tr>
				</thead>
				<tbody>
					<c:forEach var="product" items="${allProducts}">
						<tr>
							<td><a href="/products/${product.id}"> <c:out
										value="${product.name}">
									</c:out>
							</a></td>
						</tr>
					</c:forEach>
			</table>


			<table class="table mt-3 table-bordered table-striped">
				<thead>
					<tr>
						<th scope="col">Categories</th>
					</tr>
				</thead>
				<tbody>
					<c:forEach var="category" items="${allCategories}">
						<tr>
							<td><a href="/categories/${category.id}"> <c:out
										value="${category.name}">
									</c:out>
							</a></td>
						</tr>
					</c:forEach>
			</table>
		</div>
	</div>


</body>
</html>

