package com.junggu.backjoonframeautomaticgenerator.domain.frame.domain;

import com.junggu.backjoonframeautomaticgenerator.global.StringBuilder;
import lombok.Builder;
import lombok.Getter;

import java.io.IOException;

@Getter
public class Frame {
    private boolean isTestCase;
    private boolean isNQuantity;
    private boolean isSpaceIncludeNumber;
    private boolean isNumber;

    public Frame() {
        this.isTestCase = false;
        this.isNQuantity = false;
        this.isSpaceIncludeNumber = false;
        this.isNumber = false;
    }

    @Builder
    public Frame(boolean isTestCase, boolean isNQuantity, boolean isSpaceIncludeNumber, boolean isNumber) {
        this.isTestCase = isTestCase;
        this.isNQuantity = isNQuantity;
        this.isSpaceIncludeNumber = isSpaceIncludeNumber;
        this.isNumber = isNumber;
    }

    public String getForm() {
        StringBuilder sb = new StringBuilder();
        sb.append("public static void main(String[] args) throws IOException {");

        sb.append("BufferedReader br = new BufferedReader(new InputStreamReader(System.in));");

        if (isTestCase) {
            sb.append("");
            sb.append("int testCase = Integer.parseInt(br.readLine());");
            sb.append("while (testCase-- > 0) {");
        }

        if (isNQuantity) {
            sb.append("");
            sb.append("int n = Integer.parseInt(br.readLine());");
            sb.append("while (n-- > 0) {");
        }

        if (isSpaceIncludeNumber) {
            sb.append("int[] array = convertStringArrayToIntegerArray(br.readLine().split(\" \"));");
        }else if (isNumber) {
            sb.append("int input = Integer.parseInt(br.readLine());");
        } else {
            sb.append("String input = br.readLine();");
        }

        sb.append("// logic start");

        if (isNQuantity) {
            sb.append("}");
        }

        if (isTestCase) {
            sb.append("}");
        }

        sb.append("}");

        sb.append(getIsSpaceIncludeNumberMethod());

        return sb.toString();
    }

    private String getIsSpaceIncludeNumberMethod() {
        StringBuilder sb = new StringBuilder();
        if (isSpaceIncludeNumber) {
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
