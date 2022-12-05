package main.java.com.kcorkrad;

public class OpCodeSys {

    private int opCodePointer;
    private int destinationPointer;
    private int operandOnePointer;
    private int operandTwoPointer;


    public Integer[] processIntCode(Integer[] intCodeProgram) {
        while (true) {
            int opCode = intCodeProgram[opCodePointer];

            if (opCode == 99) {
                // stop, reset opCodePointer
                opCodePointer = 0;
                return intCodeProgram;

            } else if (opCode == 1) {
                addition(intCodeProgram);

            } else if (opCode == 2) {
                multiply(intCodeProgram);

            } else {
                // unrecognized code, should throw error
                System.out.println("unrecognized instruction: " + opCode + "\nat location: " + opCodePointer);

            }
            opCodePointer += 4;
        }
    }


    private void multiply(Integer[] intCodeProgram) {
        operandOnePointer = intCodeProgram[opCodePointer + 1];
        operandTwoPointer = intCodeProgram[opCodePointer + 2];
        destinationPointer = intCodeProgram[opCodePointer + 3];
        intCodeProgram[destinationPointer] = intCodeProgram[operandOnePointer] * intCodeProgram[operandTwoPointer];
    }

    private void addition(Integer[] intCodeProgram) {
        operandOnePointer = intCodeProgram[opCodePointer + 1];
        operandTwoPointer = intCodeProgram[opCodePointer + 2];
        destinationPointer = intCodeProgram[opCodePointer + 3];
        intCodeProgram[destinationPointer] = intCodeProgram[operandOnePointer] + intCodeProgram[operandTwoPointer];
    }

}
