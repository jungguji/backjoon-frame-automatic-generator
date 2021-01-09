package com.junggu.backjoonframeautomaticgenerator.global;

public class StringBuilder {
    private java.lang.StringBuilder sb = new java.lang.StringBuilder();
    private static final int TAB_TO_SPACE = 4;
    private int tab;

    public StringBuilder() {
        this.tab = 0;
    }

    public java.lang.StringBuilder append(String str) {
        if (str.startsWith("}")) {
            removeDepth();
        }

        int space = this.tab * TAB_TO_SPACE;

        if (str.endsWith("{")) {
            addDepth();
        }

        for (int i = 0; i < space; i++) {
            this.sb.append(" ");
        }

        this.sb.append(str).append("\n");

        return sb;
    }

    private void depth(String str) {
        if (str.endsWith("{")) {
            addDepth();
        } else if (str.endsWith("}")) {
            removeDepth();
        }
    }

    public String toString() {
        return sb.toString();
    }

    public void addDepth() {
        this.tab += 1;
    }

    public void removeDepth() {
        this.tab -= 1;
    }
}

