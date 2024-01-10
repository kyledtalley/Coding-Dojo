public class Comment {
    private Integer id;
    private String commentText;
    private Integer likes;
    private Integer dislikes;
    private String owner;

    public Comment(Integer id, String commentText, Integer likes, Integer dislikes, String owner){
        this.id = id;
        this.commentText = commentText;
        this.likes = likes;
        this.dislikes = dislikes;
        this.owner = owner;
    }
}
