from pathlib import Path

from PIL import Image, ImageDraw, ImageFont


source = Path("/Users/lingqi/Downloads/img_nist.png")
destination = Path("public/images/publications/2026/img_nist.png")
font_path = "/System/Library/Fonts/Supplemental/Arial Bold.ttf"

image = Image.open(source).convert("RGB")
draw = ImageDraw.Draw(image)
font = ImageFont.truetype(font_path, 30)

label_style = {
    "font": font,
    "fill": "white",
    "stroke_width": 4,
    "stroke_fill": "black",
}

draw.text((16, 270), "Input", anchor="la", **label_style)
draw.multiline_text(
    (496, 270),
    "Our\nTessellated",
    anchor="ra",
    align="right",
    spacing=-3,
    **label_style,
)

destination.parent.mkdir(parents=True, exist_ok=True)
image.save(destination, format="PNG", optimize=True)
