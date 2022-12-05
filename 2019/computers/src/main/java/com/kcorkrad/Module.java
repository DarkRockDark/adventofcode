package main.java.com.kcorkrad;

public class Module {

    private int mass;
    private int fuelRequired;

    public Module(int mass) {
        this.mass = mass;
    }

    public int getMass() {
        return mass;
    }

    public int getFuelRequired() {
        int result = (int) Math.floor(this.mass / 3.0) - 2;
        this.fuelRequired = result;
        return this.fuelRequired;
    }

    public int getTotalFuelRequired() {
        this.fuelRequired = getFuelRecursed(this.mass);
        return this.fuelRequired;
    }
    private int getFuelRecursed(int thisMuch) {
        int result = (int) Math.floor(thisMuch / 3.0) - 2;
        if (result <= 0) {
            return 0;
        } else {
            return result + getFuelRecursed(result);
        }
    }
}
