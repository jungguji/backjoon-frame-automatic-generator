package com.junggu.backjoonframeautomaticgenerator.domain.frame.web;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.junggu.backjoonframeautomaticgenerator.domain.frame.dto.RequestDTO;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.ResultActions;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest
class FrameControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Test
    void getFrame() throws Exception {
        //given
        RequestDTO dto = RequestDTO.builder()
                .isTestCase(true)
                .isNQuantity(true)
                .isSpaceIncludeNumber(true)
                .build();

        ObjectMapper objectMapper = new ObjectMapper();
        String test = objectMapper.writeValueAsString(dto);

        final ResultActions action = mockMvc.perform(get("/frame")
                .contentType(MediaType.APPLICATION_JSON)
                .content(test))
                .andDo(print());

        //then
        MvcResult result = action.andExpect(status().isOk())
                .andReturn();

        System.out.println(result.getResponse().getContentAsString());
    }
}