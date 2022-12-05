package test;

import main.java.com.kcorkrad.OpCodeSys;
import org.junit.Assert;
import org.junit.Test;

public class OpCodeSysTest {

    static Integer[][] OPCODE_ARRAY_TEST = {
            {1,9,10,3,2,3,11,0,99,30,40,50},
            {1,0,0,0,99},
            {2,3,0,3,99},
            {2,4,4,5,99,0},
            {1,1,1,4,99,5,6,0,99},
    };

    static Integer[][] OPCODE_ARRAY_RESULT = {
            {3500,9,10,70,2,3,11,0,99,30,40,50},
            {2,0,0,0,99},
            {2,3,0,6,99},
            {2,4,4,5,99,9801},
            {30,1,1,4,2,5,6,0,99},
    };

    @Test
    public void getResult() {
        OpCodeSys opCodeSys = new OpCodeSys();
        for (int i = 0; i < OPCODE_ARRAY_TEST.length; i++) {
            Integer[] result = opCodeSys.processIntCode(OPCODE_ARRAY_TEST[i]);
            Assert.assertArrayEquals(OPCODE_ARRAY_RESULT[i], result);
        }
    }
}