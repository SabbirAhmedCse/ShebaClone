package Service;

public class ServiceItem {
    private String head;
    private String description;
    private String imageUrl;

    public ServiceItem(String head, String description, String imageUrl) {
        this.head = head;
        this.description = description;
        this.imageUrl = imageUrl;
    }

    public String getHead() {
        return head;
    }

    public String getDescription() {
        return description;
    }

    public String getImageUrl() {
        return imageUrl;
    }
}
