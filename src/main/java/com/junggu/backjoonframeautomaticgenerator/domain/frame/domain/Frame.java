package com.junggu.backjoonframeautomaticgenerator.domain.frame.domain;

import com.junggu.backjoonframeautomaticgenerator.global.StringBuilder;
import lombok.Builder;
import lombok.Getter;

@Getter
public class Frame {
    private boolean testCase;
    private boolean multiCaseQuantity;
    private boolean spaceIncludeNumber;
    private boolean inputNumber;

    public Frame() {
        this.testCase = false;
        this.multiCaseQuantity = false;
        this.spaceIncludeNumber = false;
        this.inputNumber = false;
    }

    @Builder
    public Frame(boolean testCase, boolean multiCaseQuantity, boolean spaceIncludeNumber, boolean inputNumber) {
        this.testCase = testCase;
        this.multiCaseQuantity = multiCaseQuantity;
        this.spaceIncludeNumber = spaceIncludeNumber;
        this.inputNumber = inputNumber;
    }

    public String getForm() {
        StringBuilder sb = new StringBuilder();
        sb.append("public static void main(String[] args) throws IOException {");

        sb.append("BufferedReader br = new BufferedReader(new InputStreamReader(System.in));");

        if (testCase) {
            sb.append("");
            sb.append("int testCase = Integer.parseInt(br.readLine());");
            sb.append("while (testCase-- > 0) {");
        }

        if (multiCaseQuantity) {
            sb.append("");
            sb.append("int n = Integer.parseInt(br.readLine());");
            sb.append("while (n-- > 0) {");
        }

        if (spaceIncludeNumber) {
            sb.append("int[] array = convertStringArrayToIntegerArray(br.readLine().split(\" \"));");
        } else if (inputNumber) {
            sb.append("int input = Integer.parseInt(br.readLine());");
        } else {
            sb.append("String input = br.readLine();");
        }

        sb.append("// logic start");

        if (multiCaseQuantity) {
            sb.append("}");
        }

        if (testCase) {
            sb.append("}");
        }

        sb.append("}");

        sb.append(getSpaceIncludeNumberMethod());

        return sb.toString();
    }

    private String getSpaceIncludeNumberMethod() {
        StringBuilder sb = new StringBuilder();
        if (spaceIncludeNumber) {
            sb.append("");
            sb.append("private static int[] convertStringArrayToIntegerArray(String[] args) {");
            sb.append("int[] array = new int[args.length];");
            sb.append("int i = 0;");
            sb.append("for (String str : args) {");
            sb.append("array[i++] = Integer.parseInt(str);");
            sb.append("}");
            sb.append("");
            sb.append("return array;");
            sb.append("}");
        }

        return sb.toString();
    }
}
