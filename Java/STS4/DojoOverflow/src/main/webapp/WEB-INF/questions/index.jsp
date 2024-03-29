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
    <title>Index</title>
    <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="/css/main.css"> <!-- change to match your file/naming structure -->
    <script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="/js/app.js"></script><!-- change to match your file/naming structure -->
</head>
<body>

<h1>Questions Dashboard</h1>
   <table class="table table-striped table-dark mt-3">
			<thead>
				<tr>
					<th scope="col">Question</th>
					<th scope="col">Tags</th>
				</tr>
			</thead>
			<tbody>
				<c:forEach var="question" items="${allQuestions}">
					<tr>
						<td><a href="/questions/${question.id}"> <c:out
									value="${question.text}"></c:out>
						</a></td>
						<td><c:out value="${question.tags.subject}"></c:out></td>
					</tr>
				</c:forEach>
			</tbody>
		</table>
</body>
</html>

