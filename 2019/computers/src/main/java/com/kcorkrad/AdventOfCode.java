package main.java.com.kcorkrad;

import java.util.Arrays;

public class AdventOfCode {

    public static void main(String[] args) {
        System.out.println("Hello Advent");

        Module module;

        Integer total = 0;

        for (Integer input: INPUTARRAY) {
            module = new Module(input);
            total += module.getFuelRequired();
        }
        System.out.println("Total fuel: " + total);

        // reset total
        total = 0;
        for (Integer input: INPUTARRAY) {
            module = new Module(input);
            total += module.getTotalFuelRequired();
        }
        System.out.println("Total with fuel for fuel: " + total);

        OpCodeSys opCodeSys = new OpCodeSys();

        Integer[] opCodeArrayWorkingCopy = Arrays.copyOf(OPCODE_ARRAY, OPCODE_ARRAY.length);
        opCodeArrayWorkingCopy[1] = 12;
        opCodeArrayWorkingCopy[2] = 2;


        System.out.println("OpCode Result Day 2.1: \n" + Arrays.toString(opCodeSys.processIntCode(opCodeArrayWorkingCopy)));
        // answer: 6627023

        // day 2.2
        Integer desiredOutput = 19690720;
        Integer[] output;
        for (int i = 0; i < 100; i++) {
            for (int j = 0; j < 100; j++) {
                // reset working copy
                opCodeArrayWorkingCopy = Arrays.copyOf(OPCODE_ARRAY, OPCODE_ARRAY.length);
                // set noun
                opCodeArrayWorkingCopy[1] = i;
                // set verb
                opCodeArrayWorkingCopy[2] = j;
                System.out.println("Original: \n" + Arrays.toString(OPCODE_ARRAY));
                System.out.println("OpCode Result Day 2.2: \n" + Arrays.toString(opCodeArrayWorkingCopy));
                output = opCodeSys.processIntCode(opCodeArrayWorkingCopy);
                //if (output == desiredOutput) {
                    System.out.println("output: " + output[0] + "100 * noun + verb = " + (100 * i + j));
                System.out.println();
                //}
            }
        }
    }

    // original code from day 2.1 was 1,0,0,3,1,1,2,3...
    final static Integer[] OPCODE_ARRAY = {
            1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,9,1,19,1,9,19,23,1,23,5,27,2,27,10,31,1,6,31,35,1,6,35,39,2,9,39,43,1,6,43,47,1,47,5,51,1,51,13,55,1,55,13,59,1,59,5,63,2,63,6,67,1,5,67,71,1,71,13,75,1,10,75,79,2,79,6,83,2,9,83,87,1,5,87,91,1,91,5,95,2,9,95,99,1,6,99,103,1,9,103,107,2,9,107,111,1,111,6,115,2,9,115,119,1,119,6,123,1,123,9,127,2,127,13,131,1,131,9,135,1,10,135,139,2,139,10,143,1,143,5,147,2,147,6,151,1,151,5,155,1,2,155,159,1,6,159,0,99,2,0,14,0
    };

    static Integer[] INPUTARRAY = {
            137654,
            50175,
            66976,
            57860,
            83790,
            54910,
            54619,
            116199,
            143411,
            51671,
            115872,
            71948,
            148635,
            92858,
            90939,
            127238,
            127895,
            124557,
            78529,
            55785,
            61550,
            138304,
            128465,
            74497,
            136583,
            66010,
            64320,
            91234,
            51418,
            90761,
            136134,
            66312,
            135172,
            126256,
            54124,
            53174,
            72252,
            145546,
            80950,
            52271,
            118231,
            79687,
            106127,
            108233,
            69510,
            124533,
            105202,
            54861,
            103087,
            81646,
            107634,
            105240,
            137434,
            60812,
            90066,
            149325,
            117535,
            107526,
            50814,
            51850,
            90707,
            110908,
            51739,
            96373,
            91987,
            144389,
            75682,
            142954,
            83555,
            93320,
            101914,
            117640,
            109401,
            106950,
            54521,
            130826,
            109942,
            55360,
            105653,
            92168,
            149572,
            79571,
            88590,
            104400,
            109598,
            51623,
            86649,
            143689,
            88350,
            143809,
            50119,
            75616,
            86361,
            76884,
            62339,
            83118,
            76847,
            137105,
            130460,
            54479,
    };
}
