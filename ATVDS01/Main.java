import java.util.Scanner;

public class Main {

    public static Produto[] removeArrayPosition(Produto[] arr, int in, int len) {
          Produto[] arr2 = new Produto[len-1];
          for (int i = 0; i < len-1; i++ ) {
            arr2[i] = new Produto();
          }
        for (int i = 0, k = 0; i < len; i++) {
            if (i != in) arr2[k++] = arr[i];
        }
        return arr2;
    }
    public static void main(String[] args) {
        Produto[] storage = new Produto[10000];
        int pos = 0;
        for (int i = 0; i < 10000; i++) {
            storage[i] = new Produto();
        }
        Scanner read = new Scanner(System.in);
        short loop = 3;
        while (loop != 11) {
            System.out.println("+------------------------+\n" + //
                        "| Escolha uma opção      |\n" + //
                        "| 1 - Criar produto      |\n" + //
                        "| 2 - Alterar produto    |\n" + //
                        "| 3 - Excluir produto    |\n" + //
                        "| 4 - Listar produtos    |\n" + //
                        "| 5 - Sair               |\n" + //
                        "+------------------------+\n" + //
                        "");
            int option = read.nextInt();
            read.nextLine(); // always do this garbage after reading non line because java forgor the \n
            switch (option) {
                case 1 -> {
                    Produto add = new Produto();
                    System.out.println("Product added");
                    storage[pos] = add;
                    pos++;
                }
                case 2 -> {
                    int whichProduct;
                    System.out.println("insert product position");
                    whichProduct = read.nextInt();
                    read.nextLine();
                    System.out.println("Insert name. Insert null to not change");
                    storage[whichProduct].setInfo(read.nextLine(), "null", "null", "null", -1, -1);
                    System.out.println("Insert description. Insert null to not change");
                    storage[whichProduct].setInfo("null", read.nextLine(), "null", "null", -1, -1);
                    System.out.println("Insert where to buy. Insert null to not change");
                    storage[whichProduct].setInfo("null", "null", read.nextLine(), "null", -1, -1);
                    System.out.println("Insert pid. Insert null to not change");
                    storage[whichProduct].setInfo("null", "null", "null", read.nextLine(), -1, -1);
                    System.out.println("Insert price. Insert -1 to not change");
                    storage[whichProduct].setInfo("null", "null", "null", "null", read.nextFloat(), -1);
                    read.nextLine();
                    System.out.println("Insert quantity. Insert -1 to not change");
                    storage[whichProduct].setInfo("null", "null", "null", "null", -1, read.nextInt());     
                    read.nextLine();
                }
                case 3 -> {
                    int whichProduct;
                    System.out.println("insert product position");
                    whichProduct = read.nextInt();
                    read.nextLine();
                    storage = removeArrayPosition(storage, whichProduct, pos);
                    pos--;
                }
                case 4 -> {
                    for (int i = 0; i < pos; i++) {
                        System.out.println(i + ":");
                        System.out.println("name: " + storage[i].getInfo()[0]);
                        System.out.println("description: " + storage[i].getInfo()[0]);
                        System.out.println("where to buy: " + storage[i].getInfo()[0]);
                        System.out.println("pid: " + storage[i].getInfo()[0]);
                        System.out.println("price: " + storage[i].getPrice());
                        System.out.println("quantity: " + storage[i].getQuantity());
                    }
                }
                case 5 -> {
                    loop = 11;
                }
                default -> throw new AssertionError();
            }
        }
    }
}
