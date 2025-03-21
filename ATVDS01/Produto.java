public class Produto {
    private float price;
    private int quantity;
    private String name, description, whereToBuy, pid;
    public float getPrice() {
        return this.price;
    }
    public int getQuantity() {
        return this.quantity;
    }
    public Produto getAll() {
        return this;
    }
    public String[] getInfo() {
        String[] e = new String[4];
        e[0] = this.name;
        e[1] = this.description;
        e[2] = this.whereToBuy;
        e[3] = this.pid;
        return e;
    }
    public void setPrice(float price) {
        this.price = price;
    }
    // if null then dont change lmao
    public void setInfo(String name, String description, String whereToBuy, String pid, float price, int quantity) {
        if (!"null".equals(name)) this.name = name;
        if (!"null".equals(description)) this.description = description;
        if (!"null".equals(whereToBuy)) this.whereToBuy = whereToBuy;
        if (!"null".equals(pid)) this.pid = pid;
        if (price != -1) this.price = price;
        if (quantity != -1) this.quantity = quantity;
    }
}
