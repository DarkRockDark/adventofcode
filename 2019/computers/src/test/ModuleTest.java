package test;

import main.java.com.kcorkrad.Module;
import org.junit.Assert;
import org.junit.Test;

public class ModuleTest {

    static Integer[] FUEL_DATA =  {
            12,     2,
            14,     2,
            1969,   654,
            100756, 33583 } ;
    static Integer[] FUEL_TOTAL_DATA =  {
            12,     2,
            14,     2,
            1969,   966,
            100756, 50346 } ;

    @Test
    public void getTotalFuelRequired() {
        Module module;

        for (int i = 0; i < FUEL_TOTAL_DATA.length; i+=2) {

            module = new Module(FUEL_TOTAL_DATA[i]);
            Assert.assertEquals(FUEL_TOTAL_DATA[i+1], ((Integer) module.getTotalFuelRequired()));
            System.out.println(module.getTotalFuelRequired());
        }
    }

    @Test
    public void getFuelRequired() {
        Module module;

        for (int i = 0; i < FUEL_DATA.length/2; i+=2) {

            module = new Module(FUEL_DATA[i]);
            Assert.assertEquals(FUEL_DATA[i+1], ((Integer) module.getFuelRequired()));
        }
    }

    @Test
    public void getMass() {
        Module module = new Module(FUEL_DATA[0]);

        Assert.assertEquals(FUEL_DATA[0], ((Integer) module.getMass()));
    }
}