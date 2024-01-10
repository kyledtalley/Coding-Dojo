<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
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
	<div class="container">

		<h1>
			Welcome,
			<c:out value="${loggedInUser.firstName}"></c:out>
		</h1>

		<a href="/books/create">+ Add a book to my shelf!</a> <a
			href="Add to my shelf!"></a>

		<table class="table table-striped  mt-3">
			<thead>
				<tr>
					<th scope="col">#</th>
					<th scope="col">Title</th>
					<th scope="col">Author</th>
					<th scope="col">Posted By</th>
					<th scope="col">Actions</th>

				</tr>
			</thead>
			<tbody>
				<c:forEach var="book" items="${allBooks}">
					<tr>
						<td><a href="/books/${book.id}"> <c:out value="${book.id}"></c:out>
						</a></td>
						<td><c:out value="${book.title}"></c:out></td>
						<td><c:out value="${book.author}"></c:out></td>
						<td><c:out value="${book.postedBy.firstName}"></c:out></td>
						<c:if test="${book.postedBy.id == loggedInUser.id }">
							<td><a href="/books/edit/${book.id}">Edit</a>

								<form action="/books/${book.id}" method="post">
									<input type="hidden" name="_method" value="delete" />
									<button>Delete</button>
								</form>
						</c:if>
					</tr>
				</c:forEach>
		</table>



		<a href="/auth/logout">Logout</a>
	</div>
</body>
</html>