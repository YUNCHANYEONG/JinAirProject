package com.project.jinair.model.front;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Menu {
    private String title;
    private String url;
    private String code;
    private String id;
}
